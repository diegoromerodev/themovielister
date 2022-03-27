/* eslint-disable jsx-a11y/anchor-is-valid */
import useSWR from "swr";
import Image from "next/image";
import { GetStaticProps } from "next";
import axios from "axios";
import PropTypes from "prop-types";
import Link from "next/link";
import pgSequelize from "../lib/sequelize";
import {
  PostItem,
  SectionContainer,
  SectionHeader,
} from "../components/tabloids";
import { CategorySchema } from "../lib/types";

function HomePage({ categories }: { categories: CategorySchema[] }) {
  const movieAPI = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIEKEY}&s=avengers`;
  const fetcher = (args) => fetch(args).then((res) => res.json());
  const { data } = useSWR(movieAPI, fetcher);
  if (!data) return <h1>Fetching data...</h1>;
  const movie = data.Search[0];
  return (
    <>
      {categories?.map((cat) => {
        console.log(cat.Posts);
        return (
          <SectionContainer key={`category-header-${cat.id}`}>
            <SectionHeader>{cat.name}</SectionHeader>
            {cat.Posts?.map((post) => (
              <Link href={`/posts/${post.id}`} passHref>
                <PostItem>
                  <p>{post.title}</p>
                  <p>{post.title}</p>
                </PostItem>
              </Link>
            ))}
          </SectionContainer>
        );
      })}
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
  let categories: CategorySchema;
  try {
    await pgSequelize.sync({ force: true });
    const catRes = await axios.get(`${process.env.API_URL}/api/categories`);
    categories = catRes.data;
  } catch (err) {
    throw new Error(err);
  }
  return {
    props: {
      categories,
    },
  };
};

HomePage.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HomePage;
