/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import { GetStaticProps } from "next";
import axios from "axios";
import PropTypes from "prop-types";
import Link from "next/link";
import pgSequelize from "../lib/sequelize";
import {
  MovieThumb,
  PostInfo,
  PostItem,
  SectionContainer,
  SectionHeader,
} from "../components/tabloids";
import { CategorySchema } from "../lib/types";

function HomePage({ categories }: { categories: CategorySchema[] }) {
  return (
    <>
      {categories?.map((cat) => {
        return (
          <SectionContainer key={`category-header-${cat.id}`}>
            <SectionHeader>{cat.name}</SectionHeader>
            {cat.Posts?.map((post) => (
              <Link
                key={`post-index-${post.id}`}
                href={`/posts/${post.id}`}
                passHref
              >
                <PostItem>
                  <MovieThumb>
                    <div>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src={post.Movie.imageURL}
                        alt={`${post.Movie.title} poster`}
                      />
                      <h4>
                        {post.Movie.title} ({post.Movie.year})
                      </h4>
                    </div>
                  </MovieThumb>
                  <PostInfo>
                    <p>{post.title}</p>
                    <small>
                      Created on {new Date(post.createdAt).toUTCString()}
                    </small>
                  </PostInfo>
                </PostItem>
              </Link>
            ))}
          </SectionContainer>
        );
      })}
      <div />
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
    revalidate: 10,
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
