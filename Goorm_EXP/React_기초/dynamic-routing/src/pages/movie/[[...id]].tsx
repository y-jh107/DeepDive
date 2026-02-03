import { useRouter } from "next/router";
import style from "./movie.module.css";

export default function Page() {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div className={style.page}>
      <h1>Dynamic Routing Movie Page</h1>
      <h3>{id}번째 영화의 상세 정보를 보여드릴게요.</h3>
      <div>이 영화는 ...</div>
    </div>
  );
}
