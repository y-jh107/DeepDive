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
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  res.status(200).json(data);
}
