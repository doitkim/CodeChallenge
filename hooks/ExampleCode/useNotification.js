/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useRef, useState } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(title, options);
      } else {
        return;
      }
    });
  } else {
    new Notification(title, options);
  }
};

const App = () => {
  useNotification("고기 좋아해?");

  return <h1>Hello</h1>;
};

export default App;
