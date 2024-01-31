import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import React from "react";
import "./TodoItem.css";
function TodoItem(props) {
  return (
    <li>
      {/* <span onClick={props.onDelete}>❎</span>*/}
      <DeleteIcon onDelete={props.onDelete} />

      <p className={`TodoItem-p ${props.completed && `TodoItem-p--completed`}`}>
        {props.text}
      </p>
      {/*<span
        className={`${props.completed && "TodoItem-check--active"}`}
        onClick={props.onComplete}
      >
        ✔️
      </span>*/}

      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
    </li>
  );
}

export { TodoItem };
