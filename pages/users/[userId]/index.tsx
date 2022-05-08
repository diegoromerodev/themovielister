import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Image from "next/image";
import styled from "styled-components";
import {
  PostPreviewDetails,
  SectionContainer,
  SectionHeader,
} from "../../../components/tabloids";
import {
  NoMediaSign,
  SecondaryParagraph,
} from "../../../components/typography";
import { serverAxios } from "../../../lib/serverside/serverAxiosInterceptors";
import { UserSchema } from "../../../lib/types";
import { calculateAge } from "../../../lib/utils";

const UserDetailsAvatarContainer = styled.div`
  width: 7rem;
  height: 7rem;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
  img {
    width: 100%;
  }
`;

const UserDetailsInfoContainer = styled.div`
  display: flex;
  padding: 1rem;
  gap: 1rem;
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h1>{userData.username}</h1>
                <p>
                  Member since: {calculateAge(new Date(userData.createdAt))} ago
                </p>
              </div>
              <h4>{userData.role.toUpperCase()}</h4>
            </div>
            <SecondaryParagraph>{userData.bio}</SecondaryParagraph>
          </div>
        </UserDetailsInfoContainer>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader>
          {userData.username.toUpperCase()}&apos;S POSTS
        </SectionHeader>
        {userData.Posts.map((post) => (
          <PostPreviewDetails commentCount={0} post={post} />
        ))}
        {!userData.Posts.length && (
          <NoMediaSign
            headerText="No posts yet."
            secondaryText="Tell them to start posting!"
          />
        )}
      </SectionContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const userDataRes = await serverAxios.get(
    `/api/users/${context.query.userId}`
  );
  const userData = userDataRes.data;
  return {
    props: {
      userData,
    },
  };
};

export default UserDetailsHandler;
