import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SectionContainer } from "../../../components/tabloids";
import { PostSchema } from "../../../lib/types";
import ColorPalette from "../../../styles/ColorPalette";

const PostDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const UserDetailsContainer = styled.aside`
  border: 1px solid ${ColorPalette.gray};
  border-bottom: none;
  margin-top: 1rem;
  background-color: ${ColorPalette.gray};
  padding: 0.4rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  .user-avatar {
    position: relative;
    border: 5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, blue, purple);
    width: 6rem;
    height: 6rem;
  }
  h4 {
    font-weight: 600;
    color: ${ColorPalette.light};
  }
  p {
    font-size: 0.8rem;
  }
`;

const MovieDetailsContainer = styled.div`
  border: 1px solid ${ColorPalette.gray};
  padding: 1rem;
`;

const ArtPostTitle = styled.div`
  margin-top: 1rem;
  align-self: center;
  border-radius: 2rem;
  position: relative;
  h1 {
    color: ${ColorPalette.light};
    text-transform: lowercase;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.1rem;
    text-shadow: 0 0 4rem ${ColorPalette.light};
  }
`;

function MovieDetails({ postData }: { postData: PostSchema }) {
  return (
    <SectionContainer>
      <PostDetailsContainer>
        <ArtPostTitle>
          <h1>{postData.title}</h1>
        </ArtPostTitle>
        <UserDetailsContainer role={postData.User.role}>
          <div className="user-avatar">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg/220px-Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h4>{postData.User.username}</h4>
            <p>Messages: 123</p>
          </div>
        </UserDetailsContainer>
        <MovieDetailsContainer>
          <p>{postData.body}</p>
        </MovieDetailsContainer>
      </PostDetailsContainer>
    </SectionContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
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
  postData: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    User: PropTypes.shape({
      username: PropTypes.string,
      role: PropTypes.string,
    }),
    Movie: PropTypes.shape({ imageURL: PropTypes.string }),
  }).isRequired,
};

export default MovieDetails;
