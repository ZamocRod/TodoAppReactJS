import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { AddTodoButton } from "../AddTodoButton";
import { LoadingTodos } from "../LoadingTodos";
import { ErrorTodos } from "../ErrorTodos";
import { EmptyTodos } from "../EmptyTodos";
import "./App.css";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal/Index";
function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <div className="Background">
        <div className="WindowContainer">
          <div className="TodosGeneralContainer">
            <TodoCounter />
            <TodoSearch />
            <TodoList>
              {loading && <LoadingTodos />}
              {error && <ErrorTodos />}
              {!loading && searchedTodos.length === 0 && <EmptyTodos />}
              {searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
            <AddTodoButton />
          </div>
          <div className="TodoInfo">
            <h2>Cuando selecciones un TODO, la información aparecerá aquí</h2>
          </div>
          {openModal && <Modal>Agrega un TODOOOOOOO</Modal>}
        </div>
      </div>
    </React.Fragment>
  );
}
export { AppUI };
