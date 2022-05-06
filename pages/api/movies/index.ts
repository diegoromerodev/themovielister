import type { NextApiRequest, NextApiResponse } from "next";
import { serverAxios } from "../../../lib/serverside/serverAxiosInterceptors";
import tokenMiddleware from "../../../lib/tokenMiddleware";
import Movie from "../../../schemas/movie";

export const addMovie = async (imdbId: string) => {
  try {
    const movieAPI = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIEKEY}&i=${imdbId}`;
    const movieRes = await serverAxios.get(movieAPI);
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
  let user;
  try {
    user = await tokenMiddleware(req);
  } catch (err) {
    user = false;
  }
  let movieData;
  const { imdbId } = req.body;
  switch (req.method) {
    case "POST":
      if (!user || user.role === "member")
        return res
          .status(401)
          .json({ error: "You are not allowed to do that." });
      movieData = await addMovie(imdbId);
      break;
    default:
      movieData = await Movie.findAll();
  }
  if (!movieData)
    return res.status(400).json({ error: "Invalid movie request." });
  return res.json(movieData);
};

export default moviesHandler;
