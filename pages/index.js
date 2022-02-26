import useSWR from "swr";
import Image from "next/image";
import styles from "../index.module.scss";

function HomePage() {
  const movieAPI = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIEKEY}&s=avengers`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(movieAPI, fetcher);
  if (!data) return <h1>Fetching data...</h1>;
  const movie = data.Search[0];
  return (
    <div>
      <h1 className={styles.mainHeader}>movielister</h1>
      <h3>{movie.Title}</h3>
      <Image layout="fill" src={movie.Poster} alt={`${movie.Title} Poster`} />
    </div>
  );
}

// export const getStaticProps = async () => {
//   return {
//     props: {
//       movie: data.Search[0],
//     },
//     revalidate: 10,
//   };
// };

export default HomePage;
