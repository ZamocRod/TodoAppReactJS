import React from 'react'
import './AddTodoButton.css'

function AddTodoButton() {
  return (
    <button onClick={(event)=> {
      console.log(event);
      console.log(event.target);
      console.log('Le diste click')} } >Crear Todo</button>
  )
}

export  { AddTodoButton }
