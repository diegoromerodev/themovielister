import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import PropTypes, { number } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUser } from "@fortawesome/free-solid-svg-icons";
import { HoverLink, SectionContainer } from "../../../components/tabloids";
import { PostSchema } from "../../../lib/types";
import pgSequelize from "../../../lib/sequelize";
import {
  ArtPostTitle,
  CommentCreationContainer,
  CommentTextBox,
  MovieDetailsContainer,
  PostDetailsContainer,
} from "../../../components/postDetails";
import { calculateAge } from "../../../lib/utils";
import {
  UserDetailsContainer,
  UserRole,
} from "../../../components/userDetails";

function MovieDetails({
  postData,
  postCountHash,
}: {
  postData: PostSchema;
  postCountHash: { [index: string]: string };
}) {
  return (
    <>
      <SectionContainer>
        <PostDetailsContainer>
          <ArtPostTitle>
            <h1>{postData.title}</h1>
            <div className="post-info-link">
              <Link href={`/users/${postData.User.id}`} passHref>
                <HoverLink>
                  <FontAwesomeIcon icon={faUser} /> {postData.User.username}
                </HoverLink>
              </Link>
              •
              <Link href={`/movies/${postData.Movie.imdbId}`} passHref>
                <HoverLink>
                  <FontAwesomeIcon icon={faFilm} /> {postData.Movie.title} (
                  {postData.Movie.year})
                </HoverLink>
              </Link>
            </div>
          </ArtPostTitle>
          <UserDetailsContainer role={postData.User.role}>
            <div className="user-avatar">
              <Image
                src={postData.User.avatarURL}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="user-info-post">
              <Link href={`/users/${postData.User.id}`} passHref>
                <HoverLink>{postData.User.username}</HoverLink>
              </Link>
              <UserRole>
                <p>{postData.User.role}</p>
              </UserRole>
              <p>Posts: {postCountHash[postData.User.username]}</p>
              <p>Age: {calculateAge(new Date(postData.User.createdAt))}</p>
            </div>
          </UserDetailsContainer>
          <MovieDetailsContainer>
            <p>{postData.body}</p>
          </MovieDetailsContainer>
        </PostDetailsContainer>
      </SectionContainer>
      <SectionContainer>
        <CommentCreationContainer>
          <CommentTextBox placeholder="Enter your response here..." />
          <div className="under-comment-info">
            <p>Logged in as:</p>
            <button type="submit">Submit reply</button>
          </div>
        </CommentCreationContainer>
      </SectionContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const postRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${context.query.postId}`
  );
  const postData: PostSchema = postRes.data;
  const numPostQuery = await pgSequelize.query(
    `SELECT COUNT(*), username FROM "Posts" 
    JOIN "Users" ON "Posts"."UserId" = "Users".id
    GROUP BY username;`
  );
  const numOfPostsArr = numPostQuery[0];
  const postCountHash = numOfPostsArr.reduce(
    (
      hash: Record<string, string>,
      row: { username: string; count: string }
    ) => {
      return { ...hash, [row.username]: row.count };
    },
    {}
  );
  return {
    props: {
      postData,
      postCountHash,
    },
  };
};

MovieDetails.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    User: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      role: PropTypes.string,
      avatarURL: PropTypes.string,
      createdAt: PropTypes.string,
    }),
    Movie: PropTypes.shape({
      imdbId: PropTypes.string,
      imageURL: PropTypes.string,
      title: PropTypes.string,
      year: number,
    }),
  }).isRequired,
};

export default MovieDetails;
