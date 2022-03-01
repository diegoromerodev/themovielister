const movieHandler = (req, res) => {
  const { movieId } = req.query;
  res.status(200).json({ movie: movieId });
};

export default movieHandler;
