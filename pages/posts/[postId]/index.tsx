import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUser } from "@fortawesome/free-solid-svg-icons";
import { HoverLink, SectionContainer } from "../../../components/tabloids";
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
    text-align: center;
  }
  .post-info-link {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

function MovieDetails({ postData }: { postData: PostSchema }) {
  return (
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
                <FontAwesomeIcon icon={faFilm} /> {postData.Movie.title}
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
      id: PropTypes.number,
      username: PropTypes.string,
      role: PropTypes.string,
      avatarURL: PropTypes.string,
    }),
    Movie: PropTypes.shape({
      imdbId: PropTypes.string,
      imageURL: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
