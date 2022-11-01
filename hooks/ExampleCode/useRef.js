import { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const input = useRef();
  setTimeout(() => input.current.focus(), 5000);
  return (
    <div className="UseRef">
      <div>hi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};

export default UseRef;
