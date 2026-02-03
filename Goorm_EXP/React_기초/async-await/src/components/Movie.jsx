import fetchMovieContent from "../api/fetchMovieContent";
import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import "./Movie.css";

export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchMovieContent();
      setMovies(data.movies);
    }

    loadMovies();
  }, []);

  return (
    <div className="Movie">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
