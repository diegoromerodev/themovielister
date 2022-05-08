import type { NextApiRequest, NextApiResponse } from "next";
import { MovieSchema } from "../../../lib/types";
import Movie from "../../../schemas/movie";
import Post from "../../../schemas/post";
import User from "../../../schemas/user";

const getSingleMovie = async (movieId: string) => {
  const foundMovie: MovieSchema = await Movie.findByPk(movieId, {
    include: {
      model: Post,
      include: [Movie, User],
    },
  });
  return foundMovie;
};

const movieHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query;
  let movieData;
  switch (req.method) {
    case "GET":
      movieData = await getSingleMovie(String(movieId));
      break;
    default:
      return res.status(400).json({ error: "No such endpoint." });
  }
  if (!movieData) return res.status(404).json({ error: "Movie not found." });
  return res.status(200).json(movieData);
};

export default movieHandler;
