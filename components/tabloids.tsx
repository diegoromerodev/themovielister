import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${ColorPalette.gray};
  max-width: 1200px;
  margin: 1rem auto;
`;

export const SectionHeader = styled.h2`
  background-color: ${ColorPalette.dark};
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
`;

export const PostItem = styled.div`
  grid-column: 1 / span 3;
  background: linear-gradient(0deg, #333, #444);
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
`;
