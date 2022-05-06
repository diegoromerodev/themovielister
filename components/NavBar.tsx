import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
import AppContext from "../lib/AppContext";
import { AppDataContext } from "../lib/types";
import ColorPalette from "../styles/ColorPalette";
import { HoverLink, UserThumb } from "./tabloids";
import { CircularAvatar } from "./userDetails";
import logo from "../lib/logo.svg";

const NavContainer = styled.nav`
  background-color: ${ColorPalette.dark};
  padding: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .grow {
    flex: 1;
  }
`;

const NavLogo = styled.div`
  cursor: pointer;
  width: 30vmin;
  position: relative;
  img {
    transition: all 0.2s ease-out;
    :hover {
      filter: drop-shadow(0 0 0.3rem ${ColorPalette.light}75);
    }
  }
`;

const AbsoluteUserThumb = styled(UserThumb)`
  justify-content: flex-end;
`;

const UserLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  :hover {
    background-color: ${ColorPalette.gray};
  }
  .user-link {
    border-right: 1px solid ${ColorPalette.lightGray};
    display: flex;
    padding: 0 1rem;
    gap: 1rem;
    cursor: pointer;
  }
  .logout {
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    :hover {
      background-color: ${ColorPalette.lightGray};
    }
  }
`;

function NavBar() {
  const [{ userData }]: AppDataContext = useContext(AppContext);
  return (
    <NavContainer>
      <div className="grow" />
      <Link href="/" passHref>
        <NavLogo>
          <Image src={logo} layout="responsive" priority={false} />
        </NavLogo>
      </Link>
      <AbsoluteUserThumb className="grow">
        {userData?.username && (
          <UserLinkContainer>
            <Link href={`/users/${userData.id}`} passHref>
              <span className="user-link">
                <div className="user-thumb-info">
                  <p>Logged in as:</p>
                  <HoverLink>{userData.username}</HoverLink>
                </div>
                <CircularAvatar imageURL={userData.avatarURL} />
              </span>
            </Link>
            <Link href="/auth/logout" passHref>
              <span title="Log out" className="logout">
                <FontAwesomeIcon icon={faDoorOpen} />
              </span>
            </Link>
          </UserLinkContainer>
        )}
      </AbsoluteUserThumb>
    </NavContainer>
  );
}

export default NavBar;
