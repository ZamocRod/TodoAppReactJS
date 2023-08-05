import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { AddTodoButton } from "./AddTodoButton";
import React from "react";
import "./App.css";

const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Terminar curso de React", completed: false },
  { text: "Comenzar la cosa del coso", completed: false },
  { text: "Si", completed: true },
];

function App() {
  //estados de la app
  //Estado actualizador de busqueda
  const [searchValue, setSearchValue] = React.useState("");
  //Estado de Todos
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const textTodo = todo.text.toLowerCase();
    const TodoSearched = searchValue.toLowerCase();
    return textTodo.includes(TodoSearched);
  });

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  } 
  const deleteTodo = (text) =>{
    console.log("d");
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <div className="Background">
        <div className="WindowContainer">
          <div className="TodosGeneralContainer">
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <TodoList>
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
          {/*<div>
            <h2>Cuando selecciones un TODO, la información aparecerá aquí</h2>
          </div>*/}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
