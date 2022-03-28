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
  background: linear-gradient(0deg, #111, #000);
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  border-top: 1px solid ${ColorPalette.dark};
  img {
    transition: all 0.4s ease;
    filter: saturate(0%);
  }
  &:hover {
    background: linear-gradient(0deg, #333, #322);
    img {
      filter: saturate(100%);
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

export const MovieThumb = styled.div`
  width: 25%;
  overflow: hidden;
  div {
    position: relative;
    height: 100%;
    display: grid;
    place-items: center;
    h4 {
      color: ${ColorPalette.light};
      position: absolute;
    }
    img {
      position: absolute;
    }
  }
`;
