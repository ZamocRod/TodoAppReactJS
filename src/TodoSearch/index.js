import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <input
      placeholder="Buscar TODOs"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      value={searchValue}
    />
  );
}

export { TodoSearch };
