import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="todolist-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!!props.totalTodos &&
        !props.searchedTodos?.length &&
        props.onEmptySearchResults()}
      {props.searchedTodos.map(props.render)}
      <ul></ul>
    </section>
  );
}

export { TodoList };
