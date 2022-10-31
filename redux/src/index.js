import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
const PLUS = "PLUS";
const MINUS = "MINUS";

number.innerText = 0;

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return ++count;
    case MINUS:
      return --count;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState(); // 리듀서의 상태값 저장
};

countStore.subscribe(onChange); // state 상태 업데이트

const handlePlus = () => {
  countStore.dispatch({ type: PLUS });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};
plus.addEventListener("click", handlePlus); // 디스패치 사용해서 타입 전달
minus.addEventListener("click", handleMinus); // 디스패치 사용해서 타입 전달
