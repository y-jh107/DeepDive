export default async function fetchMovieContent() {
  const res = await fetch("/data/data.json");

  const contentType = res.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("영화 데이터를 불러오지 못했습니다.");
  }

  const data = await res.json();

  if (!data.movies) {
    throw new Error("영화 데이터를 불러오지 못했습니다.");
  }

  return data;
}
