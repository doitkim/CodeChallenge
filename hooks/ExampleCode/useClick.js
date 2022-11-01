import { useEffect, useRef, useState } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? undefined : element;
};
const UseClick = () => {
  const sayHello = () => console.log("Hello");
  const title = useClick(sayHello);
  return (
    <div className="UseClick">
      <h1 ref={title}>hi</h1>
    </div>
  );
};

export default UseClick;
