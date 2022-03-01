const moviesHandler = (req, res) => {
  const { method } = req;
  if (method === "POST") {
    return res.status(200).json({ movies: ["New movie added"] });
  }
  return res.status(200).json({ movies: [] });
};

export default moviesHandler;
