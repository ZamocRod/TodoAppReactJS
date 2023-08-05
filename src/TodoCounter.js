import React from 'react'

function TodoCounter({total,completed}) {
  let text = "";
  if (completed === total) {
    text= `Has completado todos los TODOs`;
  } else {
    text= `Has completado ${completed} de ${total} TODO`;
  }
  return (
    <h1 > {text}
      </h1>
  )
}

export { TodoCounter }
