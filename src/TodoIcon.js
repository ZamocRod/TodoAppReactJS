import { ReactComponent as CheckSVG } from "./Icon/CheckIcon.svg";
import { ReactComponent as DeleteSVG } from "./Icon/DeleteIcon.svg";
function TodoIcon({ type }) {
  const iconTypes = {
    "check": <CheckSVG></CheckSVG>,
    "delete": <DeleteSVG></DeleteSVG>
  };

  return (
    <span className={`TodoItem-${type}`}>
      {iconTypes[type]}
    </span>
  );
}

export { TodoIcon };
