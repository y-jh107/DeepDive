import "./PostItem.css";
import { memo, useRef } from "react";

const PostItem = ({ id, title, isPublished, onUpdate, onDelete }) => {
  const releaseRef = useRef();

  const onClickDeleteBtn = () => {
    onDelete(id);
  };

  const onClickReleaseBtn = () => {
    onUpdate(id);
    if (!isPublished) {
      releaseRef.current.classList.add("not-release");
      releaseRef.current.classList.remove("release");
    } else {
      releaseRef.current.classList.add("release");
      releaseRef.current.classList.remove("not-release");
    }
  };

  return (
    <div className="PostItem">
      <div>📌</div>
      <div className="content">{title}</div>
      <button ref={releaseRef} onClick={onClickReleaseBtn} className="release">
        {isPublished ? "비공개" : "공개"}
      </button>
      <button onClick={onClickDeleteBtn} className="delete">
        삭제
      </button>
    </div>
  );
};

export default memo(PostItem);
