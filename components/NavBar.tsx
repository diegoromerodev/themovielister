import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import AppContext from "../lib/AppContext";
import { AppDataContext } from "../lib/types";
import ColorPalette from "../styles/ColorPalette";
import { HoverLink, UserThumb } from "./tabloids";
import { CircularAvatar } from "./userDetails";

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
  display: flex;
  align-items: center;
  border: 5px solid #f8983e;
  border-radius: 15px;
  gap: 1rem;
  div {
    border-radius: 10px;
    box-shadow: inset 0 0 20px #ffe884;
    padding: 1rem 0;
    border: 3px solid red;
    display: flex;
    flex-direction: column;
    background-color: ${ColorPalette.gray};
    align-items: center;
    transition: all 0.4s ease-in;
    &:hover {
      background-color: #dddddd;
      h3 {
        text-shadow: 0 2px 4px ${ColorPalette.dark}5a,
          0 4px 8px ${ColorPalette.dark}2a;
        color: ${ColorPalette.darker};
      }
    }
  }
  h3 {
    border-top: 1px solid ${ColorPalette.gray}aa;
    border-bottom: 1px solid ${ColorPalette.gray}aa;
    transition: all 0.4s cubic-bezier(1, -0.2, 0, 0.4);
    color: gold;
    font-family: "Inter", sans-serif;
    font-size: 2rem;
    text-align: center;
    font-weight: 500;
    text-shadow: 0 0 10px #ffb85a7a, 4px 4px 8px #ffb85a3a;
    letter-spacing: 1px;
    padding: 0 2rem;
  }
`;

const AbsoluteUserThumb = styled(UserThumb)`
  justify-content: flex-end;
`;

function NavBar() {
  const [{ userData }]: AppDataContext = useContext(AppContext);
  return (
    <NavContainer>
      <div className="grow" />
      <Link href="/" passHref>
        <NavLogo>
          <div>
            <h3>THEMOVIELISTER</h3>
          </div>
        </NavLogo>
      </Link>
      <AbsoluteUserThumb className="grow">
        {userData.username && (
          <>
            <div className="user-thumb-info">
              <p>Logged in as:</p>
              <Link href={`/users/${userData.id}`} passHref>
                <HoverLink>{userData.username}</HoverLink>
              </Link>
            </div>
            <Link href={`/users/${userData.id}`} passHref>
              <a>
                <CircularAvatar imageURL={userData.avatarURL} />
              </a>
            </Link>
          </>
        )}
      </AbsoluteUserThumb>
    </NavContainer>
  );
}

export default NavBar;
