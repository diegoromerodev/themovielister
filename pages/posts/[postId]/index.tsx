import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";
import PropTypes, { number } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUser } from "@fortawesome/free-solid-svg-icons";
import { FormEvent, useContext, useState } from "react";
import HTMLReactParser from "html-react-parser";
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
import { customAxios } from "../../../lib/hooks/useAxiosInterceptor";
import { serverAxios } from "../../../lib/serverside/serverAxiosInterceptors";

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
    const newCommentRes = await customAxios.post(
      `/api/posts/${postData.id}/comments`,
      {
        body,
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
            {HTMLReactParser(postData.body)}
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
  const postRes = await serverAxios.get(`/api/posts/${context.query.postId}`);
  const postCommentsRes = await serverAxios.get(
    `/api/posts/${context.query.postId}/comments`
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
