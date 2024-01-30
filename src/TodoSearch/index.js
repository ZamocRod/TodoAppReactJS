import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <>
      <p>Buscar todo especifico</p>
      <input
        placeholder="Buscar TODOs"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        value={searchValue}
      />
    </>
  );
}

export { TodoSearch };
