import "./PostItem.css";
import { memo, useRef } from "react";
import { usePost } from "../context/PostContext";

const PostItem = ({ post }) => {
  const releaseRef = useRef();
  const { onUpdate, onDelete } = usePost();

  const onClickDeleteBtn = () => {
    onDelete(post.id);
  };

  const onClickReleaseBtn = () => {
    onUpdate(post.id);
    if (!post.isPublished) {
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
      <div className="content">{post.title}</div>
      <button ref={releaseRef} onClick={onClickReleaseBtn} className="release">
        {post.isPublished ? "비공개" : "공개"}
      </button>
      <button onClick={onClickDeleteBtn} className="delete">
        삭제
      </button>
    </div>
  );
};

export default memo(PostItem);
