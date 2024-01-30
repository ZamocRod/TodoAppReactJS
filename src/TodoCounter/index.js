import React from "react";

function TodoCounter({ completedTodos, totalTodos }) {
  let text = "";
  if (completedTodos === totalTodos) {
    text = `Has completado todos los TODOs`;
  } else {
    text = `Has completado ${completedTodos} de ${totalTodos} TODO`;
  }
  return <h1> {text}</h1>;
}

export { TodoCounter };
