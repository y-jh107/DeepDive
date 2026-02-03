async function fetchMovieContent() {
  const res = await fetch("/data/data.json");
  const movies = await res.json();

  return movies;
}

export default fetchMovieContent;
