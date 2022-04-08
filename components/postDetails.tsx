import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import styled from "styled-components";
import { UserSchema } from "../lib/types";
import { calculateAge } from "../lib/utils";
import ColorPalette from "../styles/ColorPalette";
import { HoverLink } from "./tabloids";
import { UserDetailsContainer, UserRole } from "./userDetails";

export const PostDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const MovieDetailsContainer = styled.div`
  padding: 1rem;
`;

export const ArtPostTitle = styled.div`
  margin-top: 1rem;
  align-self: center;
  border-radius: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const CommentCreationContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  gap: 0.5rem;
  .under-comment-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    button {
      font-family: "Inter";
    }
    .username-logged {
      font-weight: 700;
    }
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${ColorPalette.light};
  color: ${ColorPalette.light};
  background-color: ${ColorPalette.gray};
  font-weight: 600;
  cursor: pointer;
  :hover {
    background-color: ${ColorPalette.dark};
  }
`;

export const CommentTextBox = styled.textarea`
  background: transparent;
  border: 1px solid ${ColorPalette.gray};
  padding: 10px;
  width: 100%;
  color: ${ColorPalette.light};
`;

export function UserInfoPostHeader({
  user,
  postCount,
}: {
  user: UserSchema;
  postCount: number;
}) {
  return (
    <UserDetailsContainer role={user.role}>
      <div className="user-avatar">
        <Image src={user.avatarURL} layout="fill" objectFit="cover" />
      </div>
      <div className="user-info-post">
        <Link href={`/users/${user.id}`} passHref>
          <HoverLink>{user.username}</HoverLink>
        </Link>
        <UserRole>
          <p>{user.role}</p>
        </UserRole>
        <p>Posts: {postCount}</p>
        <p>Age: {calculateAge(new Date(user.createdAt))}</p>
      </div>
    </UserDetailsContainer>
  );
}

export function CommentCreator({
  user,
  handleSubmit,
}: {
  user: UserSchema;
  handleSubmit: (e: FormEvent<HTMLFormElement>, body: string) => void;
}) {
  const [commentText, setCommentText] = useState("");
  return (
    <CommentCreationContainer onSubmit={(e) => handleSubmit(e, commentText)}>
      <CommentTextBox
        value={commentText}
        onChange={({ target: { value } }) => setCommentText(value)}
        placeholder="Enter your response here..."
      />
      <div className="under-comment-info">
        <p>
          Logged in as: <span className="username-logged">{user.username}</span>
        </p>
        <SubmitButton type="submit">Submit reply</SubmitButton>
      </div>
    </CommentCreationContainer>
  );
}
