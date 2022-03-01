import type { NextApiRequest, NextApiResponse } from "next";

interface MoviesResponse {
  movie: string[] | string;
}

const movieHandler = (
  req: NextApiRequest,
  res: NextApiResponse<MoviesResponse>
) => {
  const { movieId } = req.query;
  res.status(200).json({ movie: movieId });
};

export default movieHandler;
