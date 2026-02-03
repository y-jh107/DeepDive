import "./MovieItem.css";

function MovieItem({ movie }) {
  console.log(movie);
  return (
    <div className="MovieItem">
      <img src={movie.backdropUrl} />
      <h2>{movie.title}</h2>
      <div>{movie.description}</div>
    </div>
  );
}

export default MovieItem;
