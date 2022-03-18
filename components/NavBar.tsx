import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

const NavContainer = styled.nav`
  background-color: ${ColorPalette.dark};
  padding: 1.1rem;
`;

const NavLogo = styled.h3`
  font-family: sans-serif;
  color: ${ColorPalette.light};
  font-family: "Inter";
  font-size: 1.2rem;
  letter-spacing: 1.2rem;
  text-align: center;
  font-weight: 900;
`;

function NavBar() {
  return (
    <NavContainer>
      <NavLogo>MOVIELISTER</NavLogo>
    </NavContainer>
  );
}

export default NavBar;
