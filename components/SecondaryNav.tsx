import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import AppContext from "../lib/AppContext";
import { AppDataContext } from "../lib/types";
import ColorPalette from "../styles/ColorPalette";

const LighterNavContainer = styled.div`
  background-color: ${ColorPalette.gray};
  gap: 2rem;
  justify-content: center;
  display: flex;
  padding: 0.5rem;
  a {
    color: ${ColorPalette.light};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5rem;
    transition: all 0.2s ease-out;
    width: 15%;
    text-align: center;
    &:hover {
      font-weight: 800;
    }
  }
  p {
    color: ${ColorPalette.light};
    font-weight: 100;
    opacity: 0.4;
  }
`;

function SecondaryNav() {
  const [appData]: AppDataContext = useContext(AppContext);
  return (
    <LighterNavContainer>
      {appData.userData?.username ? (
        <>
          <Link href="/posts/create" passHref>
            Create Post
          </Link>
          <p>|</p>
          <Link href="/about" passHref>
            About
          </Link>
        </>
      ) : (
        <>
          <Link href="/auth/signup" passHref>
            Create Account
          </Link>
          <p>|</p>
          <Link href="/auth/login" passHref>
            Login
          </Link>
          <p>|</p>
          <Link href="/about" passHref>
            About
          </Link>
        </>
      )}
    </LighterNavContainer>
  );
}

export default SecondaryNav;
