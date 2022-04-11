/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { PostSchema } from "../lib/types";
import ColorPalette from "../styles/ColorPalette";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${ColorPalette.gray};
  max-width: 1200px;
  margin: 1rem auto;
`;

export const SectionHeader = styled.h2`
  background-color: ${ColorPalette.dark};
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
`;

export const PostItem = styled.div`
  grid-column: 1 / span 3;
  background: linear-gradient(0deg, #111, #000);
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  border-top: 1px solid ${ColorPalette.dark};
  img {
    transition: all 0.4s ease;
    filter: saturate(0%);
  }
  &:hover {
    background: linear-gradient(0deg, #333, #322);
    img {
      filter: saturate(100%);
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  p {
    font-weight: 700;
  }
  small {
    font-weight: 200;
  }
`;

export const MovieThumb = styled.a`
  width: 25%;
  overflow: hidden;
  border: 1px solid ${ColorPalette.gray};
  cursor: pointer;
  div {
    position: relative;
    height: 100%;
    display: grid;
    place-items: center;
    h4 {
      color: ${ColorPalette.light};
      position: absolute;
    }
    img {
      position: absolute;
    }
  }
`;

export const UserThumb = styled.div`
  display: flex;
  gap: 1rem;
  .user-thumb-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 300;
    p {
      font-size: 0.7rem;
    }
  }
  .user-thumb-img {
    width: 3rem;
    overflow: hidden;
    height: 3rem;
    position: relative;
    border-radius: 50%;
    border: 1px solid ${ColorPalette.gray};
    img {
      position: absolute;
    }
  }
`;

export const HoverLink = styled.a`
  &:hover {
    color: gold;
  }
`;

export const BoldTextShadow = styled.h4`
  text-shadow: 1px 1px 5px ${ColorPalette.darker},
    2px 2px 10px ${ColorPalette.darker};
`;

export function PostPreviewDetails({ post }: { post: PostSchema }) {
  return (
    <PostItem>
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
        <Link key={`post-index-${post.id}`} href={`/posts/${post.id}`} passHref>
          <HoverLink>{post.title}</HoverLink>
        </Link>
        <small>Created on {new Date(post.createdAt).toUTCString()}</small>
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
            <Image src={post.User.avatarURL} objectFit="cover" layout="fill" />
          </a>
        </Link>
      </UserThumb>
    </PostItem>
  );
}
