import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

export const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid ${ColorPalette.gray};
  max-width: 1200px;
  margin: 1rem auto;
`;

export const SectionHeader = styled.h2`
  grid-column: 1 / span 3;
  background-color: ${ColorPalette.dark};
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
`;
