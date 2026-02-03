import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export type Movie = {
  id: number;
  title: string;
  type: "movie";
  creator: string[];
  cast: string[];
  genre: string[];
  features: string[];
  backdropUrl: string;
  description: string;
  previewLink: string;
  releaseYear: number;
  runningTime: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  const movies = data.movies ?? data;

  const movie = movies.find((movie: Movie) => movie.id === Number(id));

  if (!movie) {
    return res.status(404).json({
      message: "해당 영화를 찾을 수 없습니다.",
    });
  }

  console.log(movie);

  res.status(200).json(movie);
}
