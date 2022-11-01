import { useEffect, useRef, useState } from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
const UseConfirm = () => {
  const abort = () => console.log("Aborted");
  const deleteWorld = () => {
    console.log("Deleting the world");
  };

  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="UseConfirm">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default UseConfirm;
