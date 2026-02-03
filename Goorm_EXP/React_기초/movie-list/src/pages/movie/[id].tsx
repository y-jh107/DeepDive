import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { Movie } from "../api/movies";
import Image from "next/image";
import style from "./movie.module.css";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    if (!id) return;

    fetch(`/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>로딩 중...</p>;

  return (
    <div className={style.movie}>
      <h1>{movie.title}</h1>
      <Image
        src={movie.backdropUrl}
        alt={movie.title}
        width={600}
        height={332}
        className={style.backdrop}
      />
      <p>{movie.releaseYear}</p>
      <p>{movie.description}</p>
    </div>
  );
}
