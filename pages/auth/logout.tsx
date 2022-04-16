import { useContext } from "react";
import styled from "styled-components";
import { SubmitButton } from "../../components/postDetails";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import { PrimaryThinHeader } from "../../components/typography";
import { CircularAvatar } from "../../components/userDetails";
import AppContext from "../../lib/AppContext";
import { AppDataContext } from "../../lib/types";

const LogoutScreenContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
  padding: 2rem;
`;

function LogoutPage() {
  const [appData, setAppData]: AppDataContext = useContext(AppContext);

  const handleLogoutClick = () => {
    localStorage.clear();
    setAppData({});
  };

  if (!appData.userData?.username) return null;
  return (
    <SectionContainer>
      <SectionHeader>Logout</SectionHeader>
      <LogoutScreenContainer>
        <CircularAvatar
          width="10rem"
          height="10rem"
          imageURL={appData.userData.avatarURL}
        />
        <PrimaryThinHeader>
          See you soon, {appData.userData.username}!
        </PrimaryThinHeader>
        <SubmitButton onClick={handleLogoutClick}>Logout</SubmitButton>
      </LogoutScreenContainer>
    </SectionContainer>
  );
}

export default LogoutPage;
