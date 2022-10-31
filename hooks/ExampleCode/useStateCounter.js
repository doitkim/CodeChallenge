import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const onClickPlus = () => {
    setCounter(counter + 1);
  };

  const onClickMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
      <br />
      <span>{counter}</span>
    </>
  );
}

export default Counter;
