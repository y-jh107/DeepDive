import fetchMovieContent from "../api/fetchMovieContent";
import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import ErrorMessage from "./ErrorMessage";
import "./Movie.css";

export default function Movie() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const loadMovies = async () => {
    try {
      const data = await fetchMovieContent();
      setMovies(data.movies);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    (async () => {
      await loadMovies();
    })();
  }, []);

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchMovieContent} />;
  }

  return (
    <div className="Movie">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
