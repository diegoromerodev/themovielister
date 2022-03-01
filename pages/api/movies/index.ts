import type { NextApiRequest, NextApiResponse } from "next";

const moviesHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method === "POST") {
    return res.status(200).json({ movies: ["New movie added"] });
  }
  return res.status(200).json({ movies: [] });
};

export default moviesHandler;
