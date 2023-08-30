import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"
import { TodoContext } from "../TodoContext";

function Modal({ children }) {
  const { setOpenModal } = React.useContext(TodoContext);
  return ReactDOM.createPortal(
    <div className="ModalBack">
      <div className="Modal_Children">
        <div className="Modal_TopBar">
          <p>Agregar un Todo</p>
          <button
            className="ModalExitButton"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="Modal_Content">
          <h3>Titulo del Todo</h3>
          <input type="text"></input>
          <h3>Descripción del Todo</h3>
          <input></input>
          <button className="CreateTodoButton Modal_Content_CreateBtn">
            Crear Todo
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
export { Modal };
