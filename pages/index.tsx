/* eslint-disable jsx-a11y/anchor-is-valid */
import useSWR from "swr";
import Image from "next/image";
import { GetStaticProps } from "next";
import pgSequelize from "../lib/sequelize";
import { SectionContainer, SectionHeader } from "../components/tabloids";
import Post from "../schemas/post";
import Category from "../schemas/category";

function HomePage() {
  const movieAPI = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIEKEY}&s=avengers`;
  const fetcher = (args) => fetch(args).then((res) => res.json());
  const { data } = useSWR(movieAPI, fetcher);
  if (!data) return <h1>Fetching data...</h1>;
  const movie = data.Search[0];
  return (
    <>
      <SectionContainer>
        <SectionHeader>General Discussion</SectionHeader>
      </SectionContainer>
      <div>
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
    await pgSequelize.sync({ force: true });
    console.log("Success authenticating");
  } catch (err) {
    console.log("Auth failed", err);
  }
  return {
    props: {},
  };
};

export default HomePage;
