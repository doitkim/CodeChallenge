const messageList = document.querySelector("ul"); // DOM의 태그 선택
const nickForm = document.querySelector("#nick"); // DOM의 nick id 태그 선택
const messageForm = document.querySelector("#message"); // DOM의 message id 태그 선택
const socket = new WebSocket(`ws://${window.location.host}`); // 웹 소켓 로컬 주소로 생성

function makeMessage(type, payload) {
  // 타입과 페이로드 받아서 JSON 형식으로 리턴함
  const msg = { type, payload };
  return JSON.stringify(msg);
}

function handleOpen() {
  console.log("Connected to Server ✅"); // 소켓 열였을때 콘솔 출력
}

socket.addEventListener("open", handleOpen); // 소켓에 이벤트 리스너 설정

socket.addEventListener("message", (message) => {
  const li = document.createElement("li"); // 리스트 태그 생성
  li.innerText = message.data; // 리스트 내용 메시지 넣기
  messageList.append(li); // 메시지 리스트에 자식으로 태그 추가
});
socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌"); // 소켓 닫히면 출력
});

function handleSubmit(event) {
  event.preventDefault(); // Submit의 기본적인 새로고침 막음
  const input = messageForm.querySelector("input"); // Input  태그 선택
  socket.send(makeMessage("new_message", input.value)); // 소켓으로 보내는데 메시지 생성 함수 사용
  input.value = ""; // Input 값 초기화
}

function handleNickSubmit(event) {
  event.preventDefault(); // Submit 이벤트는 기본적으로 새로고침을 가지고 있어서 막는 용도
  const input = nickForm.querySelector("input"); // Input 태그 선택
  socket.send(makeMessage("nickname", input.value)); // 메시지 생성 함수 결과를 보내기
}

messageForm.addEventListener("submit", handleSubmit); // 이벤트 리스너
nickForm.addEventListener("submit", handleNickSubmit); // 이벤트 리스너
