import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);

  let text = "";
  if (completedTodos === totalTodos) {
    text= `Has completado todos los TODOs`;
  } else {
    text= `Has completado ${completedTodos} de ${totalTodos} TODO`;
  }
  return (
    <h1 > {text}
      </h1>
  )
}

export { TodoCounter }
