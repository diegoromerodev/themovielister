import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

export const UserRole = styled.div`
  background: ${ColorPalette.darker};
  padding: 5px;
  display: inline-block;
  text-transform: uppercase;
  color: #0f0;
`;

export const UserDetailsContainer = styled.aside`
  border: 1px solid ${ColorPalette.gray};
  border-bottom: none;
  margin-top: 1rem;
  background-color: ${ColorPalette.gray};
  padding: 0.4rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  .user-avatar {
    position: relative;
    border: 5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, blue, purple);
    width: 6rem;
    height: 6rem;
  }
  h4 {
    font-weight: 600;
    color: ${ColorPalette.light};
  }
  p {
    font-size: 0.8rem;
  }
  .user-info-post {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
  }
`;
