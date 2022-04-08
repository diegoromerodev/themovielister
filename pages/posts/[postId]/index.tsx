import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";
import PropTypes, { number } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUser } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useContext, useState } from "react";
import { HoverLink, SectionContainer } from "../../../components/tabloids";
import { AppDataContext, CommentSchema, PostSchema } from "../../../lib/types";
import pgSequelize from "../../../lib/sequelize";
import {
  ArtPostTitle,
  CommentCreator,
  MovieDetailsContainer,
  PostDetailsContainer,
  UserInfoPostHeader,
} from "../../../components/postDetails";
import AppContext from "../../../lib/AppContext";

function MovieDetails({
  postData,
  postCountHash,
  comments,
}: {
  postData: PostSchema;
  postCountHash: { [index: string]: number };
  comments: CommentSchema[];
}) {
  const [appData]: AppDataContext = useContext(AppContext);
  const [localComments, setLocalComments] = useState(comments);
  const handleCommentCreation = async (
    e: FormEvent<HTMLFormElement>,
    body: string
  ) => {
    e.preventDefault();
    const newCommentRes = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${postData.id}/comments`,
      {
        body,
      },
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImRpZWcwcjBtM3IwIiwiYXZhdGFyVVJMIjoiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9FYlVzWkVzXzFZZy9tYXhyZXNkZWZhdWx0LmpwZyIsImVtYWlsIjoiZGllZ29yb21lcm94ZEBlbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJEaWVnbyIsImxhc3ROYW1lIjoiUm9tZXJvIiwicGFzc3dvcmQiOiIkMmEkMDUkS3AyLjh2clY4dnZsdXYyMWx5TFhCT0Z0Rkl2TmZxaHpqZmI1Rjk1V1htTW5Lbi9zS0hGUkciLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVkQXQiOiIyMDIyLTA0LTA0VDE4OjAzOjAzLjY2MVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA0LTA0VDE4OjAzOjAzLjY2MVoifSwiaWF0IjoxNjQ5MDk1Mzg2fQ.hKKc_IMHz-BAz-pl9aYGehZgmFZTk35XygKAjqHpXR8",
        },
      }
    );
    const commentData: CommentSchema = newCommentRes.data;
    if (commentData) {
      setLocalComments((prevComments) => [...prevComments, commentData]);
    }
  };
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
          <UserInfoPostHeader
            user={postData.User}
            postCount={postCountHash[postData.User.username]}
          />
          <MovieDetailsContainer>
            <p>{postData.body}</p>
          </MovieDetailsContainer>
        </PostDetailsContainer>
      </SectionContainer>
      {localComments.map((com) => (
        <SectionContainer
          key={`postcomment${postData.id}${com.id}${com.User.id}`}
        >
          <UserInfoPostHeader
            user={com.User}
            postCount={postCountHash[com.User.username]}
          />
          <MovieDetailsContainer>
            <p>{com.body}</p>
          </MovieDetailsContainer>
        </SectionContainer>
      ))}
      <SectionContainer>
        <CommentCreator
          handleSubmit={handleCommentCreation}
          user={appData.userData}
        />
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
  const postCommentsRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${context.query.postId}/comments`
  );
  const postData: PostSchema = postRes.data;
  const comments: CommentSchema[] = postCommentsRes.data;
  const numPostQuery = await pgSequelize.query(
    `SELECT COUNT(*), username FROM "Posts" 
    JOIN "Users" ON "Posts"."UserId" = "Users".id
    GROUP BY username;`
  );
  const numOfPostsArr = numPostQuery[0];
  const postCountHash = numOfPostsArr.reduce(
    (
      hash: Record<string, string>,
      row: { username: string; count: number }
    ) => {
      return { ...hash, [row.username]: Number(row.count) };
    },
    {}
  );
  return {
    props: {
      postData,
      postCountHash,
      comments,
    },
  };
};

MovieDetails.propTypes = {
  postData: PropTypes.shape({
    id: PropTypes.number,
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
