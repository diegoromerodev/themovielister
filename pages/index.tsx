import useSWR from "swr";
import Image from "next/image";
import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "../index.module.scss";
import pgSequelize from "../lib/sequelize";

function HomePage() {
  const movieAPI = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIEKEY}&s=avengers`;
  const fetcher = (args) => fetch(args).then((res) => res.json());
  const { data } = useSWR(movieAPI, fetcher);
  if (!data) return <h1>Fetching data...</h1>;
  const movie = data.Search[0];
  return (
    <>
      <nav>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </nav>
      <div>
        <h1 className={styles.mainHeader}>movielister</h1>
        <h3>{movie.Title}</h3>
        <Image
          layout="intrinsic"
          width={400}
          height="600"
          src={movie.Poster}
          alt={`${movie.Title} Poster`}
        />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    await pgSequelize.authenticate();
    console.log("Success authenticating");
  } catch (err) {
    console.log("Auth failed", err);
  }
  return {
    props: {},
  };
};

export default HomePage;
