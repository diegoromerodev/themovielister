import Link from "next/link";
import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

const NavContainer = styled.nav`
  background-color: ${ColorPalette.dark};
  padding: 1.1rem;
  display: flex;
  justify-content: center;
`;

const NavLogo = styled.h3`
  font-family: sans-serif;
  color: ${ColorPalette.light};
  font-family: "Inter";
  font-size: 1.2rem;
  letter-spacing: 1.2rem;
  text-align: center;
  font-weight: 900;
  cursor: pointer;
`;

function NavBar() {
  return (
    <NavContainer>
      <Link href="/" passHref>
        <NavLogo>MOVIELISTER</NavLogo>
      </Link>
    </NavContainer>
  );
}

export default NavBar;
