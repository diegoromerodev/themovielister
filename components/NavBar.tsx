import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../lib/AppContext";
import { AppDataContext } from "../lib/types";
import ColorPalette from "../styles/ColorPalette";
import { HoverLink, UserThumb } from "./tabloids";

const NavContainer = styled.nav`
  background-color: ${ColorPalette.dark};
  padding: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  background-color: #f78b43;
  display: flex;
  align-items: center;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    color: ${ColorPalette.dark};
    font-family: "Inter", sans-serif;
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
  }
  p {
    width: 100%;
    padding: 0.2rem;
    color: #f78b43;
    background-color: ${ColorPalette.dark};
    border-radius: 2rem;
    font-weight: 900;
    font-size: 0.9rem;
    text-align: center;
  }
`;

function NavBar() {
  const [{ userData }]: AppDataContext = useContext(AppContext);
  return (
    <NavContainer>
      <Link href="/" passHref>
        <NavLogo>
          <FontAwesomeIcon
            icon={faStar}
            color={ColorPalette.dark}
            fontSize="2rem"
          />
          <div>
            <h3>MOVIE</h3>
            <p>LISTER</p>
          </div>
          <FontAwesomeIcon
            icon={faStar}
            color={ColorPalette.dark}
            fontSize="2rem"
          />
        </NavLogo>
      </Link>
      <UserThumb>
        <div className="user-thumb-info">
          <p>Logged in as:</p>
          <Link href={`/users/${userData.id}`} passHref>
            <HoverLink>{userData.username}</HoverLink>
          </Link>
        </div>
        <Link href={`/users/${userData.id}`} passHref>
          <a href={`/users/${userData.id}`} className="user-thumb-img">
            {userData.avatarURL && (
              <Image src={userData.avatarURL} objectFit="cover" layout="fill" />
            )}
          </a>
        </Link>
      </UserThumb>
    </NavContainer>
  );
}

export default NavBar;
