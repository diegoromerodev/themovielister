import type { NextApiRequest, NextApiResponse } from "next";
import Movie from "../../../schemas/movie";

const movieHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { movieId } = req.query;
  let movieData;
  switch (req.method) {
    case "GET":
      movieData = await Movie.findByPk(movieId.toString());
      break;
    default:
      return res.status(400).json("NO SUCH ENDPOINT");
  }
  if (!movieData) return res.status(404).json("NO MOVIE FOUND");
  return res.status(200).json(movieData);
};

export default movieHandler;
