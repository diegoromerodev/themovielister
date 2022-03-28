import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import Movie from "../../../schemas/movie";

export const addMovie = async (imdbId: string) => {
  try {
    const movieAPI = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIEKEY}&i=${imdbId}`;
    const movieRes = await axios.get(movieAPI);
    const movieInfo = movieRes.data;
    const movieData = await Movie.create({
      title: movieInfo.Title,
      year: movieInfo.Year,
      imdbId: movieInfo.imdbID,
      imageURL: movieInfo.Poster,
    });
    return movieData;
  } catch (err) {
    return false;
  }
};

const moviesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let movieData;
  const { imdbId } = req.body;
  switch (req.method) {
    case "POST":
      movieData = await addMovie(imdbId);
      break;
    default:
      movieData = await Movie.findAll();
  }
  return res.json(movieData);
};

export default moviesHandler;
