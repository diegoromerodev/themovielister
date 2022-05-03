/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ellipsize from "ellipsize";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { PostSchema } from "../lib/types";
import ColorPalette from "../styles/ColorPalette";
import { CircularAvatar } from "./userDetails";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${ColorPalette.gray};
  max-width: 1200px;
  margin: 1rem auto;
  position: relative;
`;

type SectionHeaderProps = {
  color?: string;
};

export const SectionHeader = styled.h2<SectionHeaderProps>`
  background-color: ${ColorPalette.dark};
  font-size: 1.2rem;
  font-weight: 800;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  flex: 1;
  color: ${({ color }) => color || ColorPalette.light};
`;

export const PostItem = styled.div`
  grid-column: 1 / span 3;
  background: linear-gradient(0deg, #111, #000);
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
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
  @media (max-width: 1200px) {
    small {
      font-size: 0.7rem;
    }
  }
`;

export const MovieThumb = styled.a`
  width: 25%;
  overflow: hidden;
  border: 1px solid ${ColorPalette.gray};
  cursor: pointer;
  align-self: stretch;
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
  @media (max-width: 1200px) {
    width: 8vmax;
    height: 10vmax;
    div {
      h4 {
        margin: 0.3rem;
        font-size: 0.8rem;
      }
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
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    .user-thumb-info {
      align-items: flex-start;
      a {
        display: none;
      }
    }
  }
`;

export const HoverLink = styled.a`
  font-weight: 600;
  &:hover {
    color: ${ColorPalette.warning};
  }
`;

export const HoverableContainer = styled.a`
  &:hover > * {
    color: ${ColorPalette.warning};
  }
`;

interface BoldTextShadowProps {
  align?: string;
}

export const BoldTextShadow = styled.h4<BoldTextShadowProps>`
  text-shadow: 1px 1px 5px ${ColorPalette.darker},
    2px 2px 10px ${ColorPalette.darker};
  text-align: ${({ align }) => align};
`;

export function PostPreviewDetails({
  post,
  commentCount,
}: {
  post: PostSchema;
  commentCount: number;
}) {
  const [maxTitleLength, setMaxTitleLength] = useState(30);

  const calculateMaxTitleLength = () => {
    setMaxTitleLength(window.innerWidth <= 1200 ? 15 : 30);
  };

  useEffect(
    () => window.addEventListener("resize", calculateMaxTitleLength),
    []
  );

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
            <BoldTextShadow align="center">
              {ellipsize(post.Movie.title, maxTitleLength)} ({post.Movie.year})
            </BoldTextShadow>
          </div>
        </MovieThumb>
      </Link>
      <PostInfo>
        <Link key={`post-index-${post.id}`} href={`/posts/${post.id}`} passHref>
          <HoverLink>{post.title}</HoverLink>
        </Link>
        <small>Created on {new Date(post.createdAt).toUTCString()}</small>
        <small>
          <FontAwesomeIcon icon={faComment} />
          &nbsp;&nbsp;{commentCount || "No"} comment
          {commentCount === 1 ? "" : "s"}
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
          <a>
            <CircularAvatar imageURL={post.User.avatarURL} />
          </a>
        </Link>
      </UserThumb>
    </PostItem>
  );
}
