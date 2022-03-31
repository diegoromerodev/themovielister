import Link from "next/link";
import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

const NavContainer = styled.nav`
  background-color: ${ColorPalette.dark};
  padding: 1.1rem;
  display: flex;
  justify-content: center;
`;

const NavLogo = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  background-color: blue;
  h3 {
    color: gold;
    font-family: "Inter", sans-serif;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 900;
    text-shadow: 3px 3px ${ColorPalette.darker};
    letter-spacing: 1rem;
    margin-right: -1rem;
  }
`;

function NavBar() {
  return (
    <NavContainer>
      <Link href="/" passHref>
        <NavLogo>
          <h3>MOVIELISTER</h3>
        </NavLogo>
      </Link>
    </NavContainer>
  );
}

export default NavBar;
