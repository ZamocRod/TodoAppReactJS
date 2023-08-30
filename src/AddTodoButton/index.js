import React from "react";
import "./AddTodoButton.css";
import { TodoContext } from "../TodoContext";

function AddTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);
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
