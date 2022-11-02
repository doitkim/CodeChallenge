/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from "react";

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  return { element, triggerFull };
};
const App = () => {
  const { element, triggerFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <img
        ref={element}
        src="https://w.namu.la/s/16479cbc6d439e7c3f2e4a6e68037c7e206c9a48ead45cd90e1df29eb0cad7d135807356bcee761d978f955e7ebfacf0bafc29468ffa1f09af1fcafa796e0085b7f78348e0cb44d5612a0b5eb12bd1f3884427a7200526b6f3cd62f133308c49"
        width="150"
      />
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
};

export default App;
