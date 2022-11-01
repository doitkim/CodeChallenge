import http from "http"; // http 모듈 사용
import express from "express"; // 익스프레스 사용
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";
const app = express();

app.set("view engine", "pug"); // 뷰 엔진을 퍼그로 설정
app.set("views", __dirname + "/views"); // 뷰 폴더 경로 설정
app.use("/public", express.static(__dirname + "/public")); // 퍼블릭 경로 사용
app.get("/", (_, res) => res.render("home")); // 루트 디렉토리 홈 렌더링
app.get("/*", (_, res) => res.redirect("/")); // 모든 경로 루트 디렉토리로 리다이렉트 설정

const httpServer = http.createServer(app);
const wsServer = new Server(httpServer, {
  // 웹소켓 서버
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true,
  },
});

instrument(wsServer, {
  auth: false,
});
function publicRooms() {
  const {
    sockets: {
      adapter: { sids, rooms },
    },
  } = wsServer;
  const publicRooms = [];
  rooms.forEach((_, key) => {
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  return publicRooms;
}

function countRoom(roomName) {
  return wsServer.sockets.adapter.rooms.get(roomName)?.size;
}

wsServer.on("connection", (socket) => {
  socket["nickname"] = "Anonymous";
  socket.onAny((event) => console.log(`Socket Event: ${event}`));

  socket.on("enter_room", (roomName, nickname, done) => {
    socket["nickname"] = nickname;
    socket.join(roomName);
    socket.to(roomName).emit("welcome", socket.nickname, countRoom(roomName));
    wsServer.sockets.emit("room_change", publicRooms());
    done();
  });
  socket.on("disconnecting", () => {
    socket.rooms.forEach((room) =>
      socket.to(room).emit("bye", socket.nickname, countRoom(room) - 1)
    );
  });

  socket.on("disconnect", () => {
    wsServer.sockets.emit("room_change", publicRooms());
  });

  socket.on("new_message", (msg, room, done) => {
    socket.to(room).emit("new_message", `${socket.nickname}: ${msg}`);
    done();
  });
  socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
});

const handleListen = () => {
  console.log("✔Server running on http://localhost:3000");
};
httpServer.listen(3000, handleListen);
