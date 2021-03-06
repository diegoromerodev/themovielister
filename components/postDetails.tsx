import { faComments, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import styled from "styled-components";
import { UserSchema } from "../lib/types";
import { calculateAge } from "../lib/utils";
import ColorPalette from "../styles/ColorPalette";
import { HoverableContainer, HoverLink } from "./tabloids";
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
  position: relative;
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
  color: ${ColorPalette.light};
  background-color: ${ColorPalette.info};
  border: 2px solid ${ColorPalette.light};
  font-weight: 600;
  cursor: pointer;
  font-family: "Inter";
  border-radius: 0.5rem;
  align-self: flex-end;
  :hover {
    background-color: ${ColorPalette.info}7a;
  }
`;

export const CommentTextBox = styled.textarea`
  background: transparent;
  border: 1px solid ${ColorPalette.gray};
  padding: 10px;
  width: 100%;
  color: ${ColorPalette.light};
  font-family: Inter;
  :focus {
    outline: 1px solid ${ColorPalette.info};
  }
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

const UnauthenticatedComment = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${ColorPalette.gray}aa;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  backdrop-filter: blur(5px);
`;

export function CommentCreator({
  user,
  handleSubmit,
}: {
  user: UserSchema;
  handleSubmit: (e: FormEvent<HTMLFormElement>, body: string) => Promise<void>;
}) {
  const [commentText, setCommentText] = useState("");

  const submitterMiddleman = async (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    await handleSubmit(e, commentText);
    setCommentText("");
  };

  return (
    <CommentCreationContainer onSubmit={submitterMiddleman}>
      {!user?.username && (
        <UnauthenticatedComment>
          <Link href="/auth/login" passHref>
            <HoverableContainer>
              <FontAwesomeIcon icon={faLock} color={ColorPalette.light} />{" "}
              <span>Log in to post a comment</span>
            </HoverableContainer>
          </Link>
        </UnauthenticatedComment>
      )}
      <CommentTextBox
        value={commentText}
        onChange={({ target: { value } }) => setCommentText(value)}
        placeholder="Enter your response here..."
      />
      <div className="under-comment-info">
        <p>
          Logged in as:{" "}
          <span className="username-logged">
            {user?.username || "Joe Smith"}
          </span>
        </p>
        <SubmitButton type="submit">
          <FontAwesomeIcon icon={faComments} />
          &nbsp;&nbsp;Submit reply
        </SubmitButton>
      </div>
    </CommentCreationContainer>
  );
}

export const EditPostButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.2rem;
  background-color: ${ColorPalette.success};
  padding: 0.5rem 1rem;
  color: ${ColorPalette.light};
  font-family: "Inter";
  border: 2px solid ${ColorPalette.light};
  font-weight: 600;
  cursor: pointer;
  :hover {
    background-color: ${ColorPalette.success}7a;
  }
`;
