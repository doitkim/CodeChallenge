import http from "http"; // http 모듈 사용
import WebSocket from "ws"; // 웹 소켓 모듈 사용
import express from "express"; // 익스프레스 사용
const app = express(); // 익스프레스 호출

app.set("view engine", "pug"); // 뷰 엔진을 퍼그로 설정
app.set("views", __dirname + "/views"); // 뷰 폴더 경로 설정
app.use("/public", express.static(__dirname + "/public")); // 퍼블릭 경로 사용
app.get("/", (_, res) => res.render("home")); // 루트 디렉토리 홈 렌더링
app.get("/*", (_, res) => res.redirect("/")); // 모든 경로 루트 디렉토리로 리다이렉트 설정

const handleListen = () => console.log(`Listening on http://localhost:3000`); // 로컬 주소 출력
const server = http.createServer(app); // http 서버 익스프레스 연동
const wss = new WebSocket.Server({ server }); // 웹 소켓 http 서버 연동

function onSocketClose() {
  console.log("Disconnected from the Browser ❌"); // 소켓 닫히면 출력
}

const sockets = [];

wss.on("connection", (socket) => {
  sockets.push(socket); // 소켓 배열에 소켓 넣기
  socket["nickname"] = "Anon"; // 닉네임 설정 안하면 익명 표기
  console.log("Connected to Browser ✅"); // 연결 되면 출력
  socket.on("close", onSocketClose); // 소켓 이벤트 설정
  socket.on("message", (msg) => {
    const message = JSON.parse(msg); // 메시지를 JSON Parse로 데이터 풀기
    switch (message.type) {
      case "new_message":
        sockets.forEach(
          (aSocket) => aSocket.send(`${socket.nickname}: ${message.payload}`) // 정보 재구성
        );
      case "nickname":
        socket["nickname"] = message.payload;
    }
  });
});

server.listen(3000, handleListen);
