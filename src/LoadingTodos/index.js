import React from "react";
import "./LoadingTodos.css";
function LoadingTodos() {
  return (
    <>
      <li className="ItemLoading">
        <span className="ItemLoading-CircleSpan"></span>
        <span className="ItemLoading-LargeSpan"></span>
        <span className="ItemLoading-CircleSpan"></span>
      </li>
      <li className="ItemLoading">
        <span className="ItemLoading-CircleSpan"></span>
        <span className="ItemLoading-LargeSpan"></span>
        <span className="ItemLoading-CircleSpan"></span>
      </li>
      <li className="ItemLoading">
        <span className="ItemLoading-CircleSpan"></span>
        <span className="ItemLoading-LargeSpan"></span>
        <span className="ItemLoading-CircleSpan"></span>
      </li>
      <li className="ItemLoading">
        <span className="ItemLoading-CircleSpan"></span>
        <span className="ItemLoading-LargeSpan"></span>
        <span className="ItemLoading-CircleSpan"></span>
      </li>
    </>
  );
}
export { LoadingTodos };
