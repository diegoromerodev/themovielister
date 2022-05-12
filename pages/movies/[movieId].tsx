import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import {
  PostPreviewDetails,
  SectionContainer,
  SectionHeader,
} from "../../components/tabloids";
import { NoMediaSign } from "../../components/typography";
import { CommentCountHash, getCommentCountHash } from "../../lib/fetchUtils";
import { serverAxios } from "../../lib/serverside/serverAxiosInterceptors";
import { MovieSchema } from "../../lib/types";

function SingleMovie({
  movie,
  commentsPerPostHash,
}: {
  movie: MovieSchema;
  commentsPerPostHash: CommentCountHash;
}) {
  return (
    <SectionContainer>
      <SectionHeader>
        <FontAwesomeIcon icon={faVideoCamera} />
        &nbsp;&nbsp;{movie.title} ({movie.year}) - {movie.Posts.length} Post
        {movie.Posts.length === 1 ? "" : "s"}
      </SectionHeader>
      {!movie.Posts.length && (
        <NoMediaSign
          headerText="No posts found"
          secondaryText="Create a post about this movie"
        />
      )}
      {movie.Posts.map((post) => (
        <PostPreviewDetails
          key={`${movie.imdbId}-${post.id}`}
          post={post}
          commentCount={commentsPerPostHash[post.id]}
        />
      ))}
    </SectionContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const movieRes = await serverAxios(`/api/movies/${ctx.query.movieId}`);
  const movie: MovieSchema = movieRes?.data;
  const commentsPerPostHash = await getCommentCountHash();
  return {
    props: {
      movie,
      commentsPerPostHash,
    },
  };
};

export default SingleMovie;
