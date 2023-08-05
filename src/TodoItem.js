import {CompleteIcon} from './CompleteIcon'
import {DeleteIcon} from './DeleteIcon'
import React from 'react'
import './TodoItem.css'
function TodoItem(props) {
  return (
    <li>
      {/* <span onClick={props.onDelete}>❎</span>*/}
      <DeleteIcon />

      <p className={`TodoItem-p ${props.completed && `TodoItem-p--completed`}`}>
        {props.text}
      </p>
      {/*<span
        className={`${props.completed && "TodoItem-check--active"}`}
        onClick={props.onComplete}
      >
        ✔️
      </span>*/}

      <CompleteIcon></CompleteIcon>
    </li>
  );
}



export { TodoItem }
