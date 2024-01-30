import React from "react";
import "./AddTodoButton.css";

function AddTodoButton({ openModal, setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        setOpenModal(true);
      }}
    >
      Crear Todo
    </button>
  );
}

export { AddTodoButton };
