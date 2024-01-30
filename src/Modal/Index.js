import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [newTodoDes, setNewTodoDes] = React.useState("");
  const onSubmitTodo = () => {
    addTodo(newTodoValue, newTodoDes);
    setOpenModal(false);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };
  const onChangeTA = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onChangeTA2 = (event) => {
    setNewTodoDes(event.target.value);
  };
  return ReactDOM.createPortal(
    <div className="ModalBack">
      <div className="Modal_Children">
        <div className="Modal_TopBar">
          <p>Agregar un Todo</p>
          <button className="ModalExitButton" onClick={onCloseModal}>
            X
          </button>
        </div>
        <div className="Modal_Content">
          <h3>Titulo del Todo</h3>
          <textarea value={newTodoValue} onChange={onChangeTA}></textarea>
          <h3>Descripción del Todo</h3>
          <textarea value={newTodoDes} onChange={onChangeTA2}></textarea>
          <button
            className="CreateTodoButton Modal_Content_CreateBtn"
            onClick={onSubmitTodo}
          >
            Crear Todo
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
export { Modal };
