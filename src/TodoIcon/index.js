import { ReactComponent as CheckSVG } from "../Icons/CheckIcon.svg";
import { ReactComponent as DeleteSVG } from "../Icons/DeleteIcon.svg";
import './TodoIcon.css'

const iconTypes = {
  "check": (color) => <CheckSVG className="TodoItem-svg" fill={color} />,
  "delete": (color) =>  <DeleteSVG className="TodoItem-svg" fill={color} />
};
function TodoIcon({ type, color, onClick }) {

  return (
    <span className={`TodoItem-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
