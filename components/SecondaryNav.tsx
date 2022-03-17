import Link from "next/link";
import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

const LighterNavContainer = styled.div`
  background-color: ${ColorPalette.gray};
  gap: 1rem;
  justify-content: center;
  display: flex;
  padding: 0.5rem;
`;

const MenuItem = styled(Link)`
  & > * {
    color: ${ColorPalette.light};
    text-decoration: none;
  }
`;

function SecondaryNav() {
  return (
    <LighterNavContainer>
      <MenuItem href="/about" passHref>
        About
      </MenuItem>
      <MenuItem href="/about" passHref>
        About
      </MenuItem>
      <MenuItem href="/about" passHref>
        About
      </MenuItem>
    </LighterNavContainer>
  );
}

export default SecondaryNav;
