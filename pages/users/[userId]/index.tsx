import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import styled from "styled-components";
import {
  PostPreviewDetails,
  SectionContainer,
  SectionHeader,
} from "../../../components/tabloids";
import { UserSchema } from "../../../lib/types";
import { calculateAge } from "../../../lib/utils";
import ColorPalette from "../../../styles/ColorPalette";

const UserDetailsAvatarContainer = styled.div`
  width: 7rem;
  height: 7rem;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
  }
`;

const UserDetailsInfoContainer = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
`;

const NoPostsSign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h3 {
    font-size: 4rem;
    color: ${ColorPalette.gray};
    font-weight: 750;
  }
  h5 {
    font-weight: 600;
    color: ${ColorPalette.dark};
    font-size: 2rem;
  }
`;

function UserDetailsHandler({ userData }: { userData: UserSchema }) {
  return (
    <>
      <SectionContainer>
        <UserDetailsInfoContainer>
          <UserDetailsAvatarContainer>
            <Image src={userData.avatarURL} layout="fill" objectFit="cover" />
          </UserDetailsAvatarContainer>
          <div>
            <h1>{userData.username}</h1>
            <p>
              Member since: {calculateAge(new Date(userData.createdAt))} ago
            </p>
          </div>
        </UserDetailsInfoContainer>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader>
          {userData.username.toUpperCase()}&apos;S POSTS
        </SectionHeader>
        {userData.Posts.map((post) => (
          <PostPreviewDetails post={post} />
        ))}
        {!userData.Posts.length && (
          <NoPostsSign>
            <h3>No posts yet</h3>
            <h5>Tell them to start posting!</h5>
          </NoPostsSign>
        )}
      </SectionContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const userDataRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${context.query.userId}`
  );
  const userData = userDataRes.data;
  return {
    props: {
      userData,
    },
  };
};

export default UserDetailsHandler;
