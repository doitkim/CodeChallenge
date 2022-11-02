import useEffect from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore === "function") {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    } else {
      return;
    }
  }, []);
};
const App = () => {
  const beforeLife = () => console.log("Pls don't leave");
  useBeforeLeave(beforeLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
