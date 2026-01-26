import "./TodoItem.css";
import { memo, useRef } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const contentRef = useRef();

  const onChangeCheckbox = () => {
    onUpdate(id);
    if (!isDone) contentRef.current.classList.add("clear");
    else contentRef.current.classList.remove("clear");
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div ref={contentRef} className="content">
        {content}
      </div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC, Higher Order Component)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라 Props가 바뀌었는지 안바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);
