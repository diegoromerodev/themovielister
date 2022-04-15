import { useContext } from "react";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import { CircularAvatar } from "../../components/userDetails";
import AppContext from "../../lib/AppContext";
import { AppDataContext } from "../../lib/types";

const handleLogout = () => {
  const [appData]: AppDataContext = useContext(AppContext);
  return (
    <SectionContainer>
      <SectionHeader>Logout</SectionHeader>
      <CircularAvatar imageURL={appData.userData.avatarURL} />
    </SectionContainer>
  );
};

export default handleLogout;
