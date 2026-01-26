import "./TodoItem.css";
import { useRef } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  const contentRef = useRef();

  const onChangeCheckbox = () => {
    onUpdate(id);
    if (!isDone) contentRef.current.classList.add("clear");
    else contentRef.current.classList.remove("clear");
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div ref={contentRef} className="content">
        {content}
      </div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
