/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import { GetServerSideProps } from "next";
import axios from "axios";
import PropTypes from "prop-types";
import Link from "next/link";
import pgSequelize from "../lib/sequelize";
import {
  BoldTextShadow,
  HoverLink,
  MovieThumb,
  PostInfo,
  PostItem,
  SectionContainer,
  SectionHeader,
  UserThumb,
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
              <PostItem key={`index-post-${post.id}`}>
                <Link href={`/movies/${post.Movie.imdbId}`} passHref>
                  <MovieThumb>
                    <div>
                      <Image
                        layout="fill"
                        objectFit="cover"
                        src={post.Movie.imageURL}
                        alt={`${post.Movie.title} poster`}
                      />
                      <BoldTextShadow>
                        {post.Movie.title} ({post.Movie.year})
                      </BoldTextShadow>
                    </div>
                  </MovieThumb>
                </Link>
                <PostInfo>
                  <Link
                    key={`post-index-${post.id}`}
                    href={`/posts/${post.id}`}
                    passHref
                  >
                    <HoverLink>{post.title}</HoverLink>
                  </Link>
                  <small>
                    Created on {new Date(post.createdAt).toUTCString()}
                  </small>
                </PostInfo>
                <UserThumb>
                  <div className="user-thumb-info">
                    <p>Created by:</p>
                    <Link href={`/users/${post.User.id}`} passHref>
                      <HoverLink>{post.User.username}</HoverLink>
                    </Link>
                  </div>
                  <Link href={`/users/${post.User.id}`} passHref>
                    <a className="user-thumb-img">
                      <Image
                        src={post.User.avatarURL}
                        objectFit="cover"
                        layout="fill"
                      />
                    </a>
                  </Link>
                </UserThumb>
              </PostItem>
            ))}
          </SectionContainer>
        );
      })}
      <div />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
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
