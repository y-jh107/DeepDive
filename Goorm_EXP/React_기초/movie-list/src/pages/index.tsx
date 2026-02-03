import { useEffect, useState } from "react";
import style from "../styles/Home.module.css";
import type { Movie } from "./api/movies";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data.movies));
  }, []);

  return (
    <div className={style.main}>
      <h1>다양한 영화들을 확인하세요!</h1>
      <div className={style.imageGrid}>
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <Image
              src={movie.backdropUrl}
              alt={movie.title}
              width={300}
              height={175}
              className={style.backdrop}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
