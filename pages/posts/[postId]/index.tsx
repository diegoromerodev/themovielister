import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import PropTypes from "prop-types";
import { PostSchema } from "../../../lib/types";

function MovieDetails({ postData }: { postData: PostSchema }) {
  return (
    <article>
      <h1>{postData.title}</h1>
    </article>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log(`${process.env.API_URL}/api/posts/${context.query}`);
  const postRes = await axios.get(
    `${process.env.API_URL}/api/posts/${context.query.postId}`
  );
  const postData = postRes.data;
  return {
    props: {
      postData,
    },
  };
};

MovieDetails.propTypes = {
  postData: PropTypes.shape({ title: PropTypes.string }).isRequired,
};

export default MovieDetails;
