function HomePage({ movie }) {
  return (
    <div>
      <h1>movielister</h1>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.MOVIEKEY}&s=avengers`
  );
  const data = await res.json();
  return {
    props: {
      movie: data.Search[0],
    },
  };
};

export default HomePage;
