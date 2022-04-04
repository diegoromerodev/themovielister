import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

export const PostDetailsContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

export const MovieDetailsContainer = styled.div`
  border: 1px solid ${ColorPalette.gray};
  padding: 1rem;
`;

export const ArtPostTitle = styled.div`
  margin-top: 1rem;
  align-self: center;
  border-radius: 2rem;
  position: relative;
  h1 {
    color: ${ColorPalette.light};
    text-transform: lowercase;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.1rem;
    text-shadow: 0 0 4rem ${ColorPalette.light};
    text-align: center;
  }
  .post-info-link {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const CommentCreationContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  gap: 0.5rem;
  .under-comment-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    button {
      font-family: "Inter";
    }
  }
`;

export const CommentTextBox = styled.textarea`
  background: transparent;
  border: 1px solid ${ColorPalette.gray};
  padding: 10px;
  width: 100%;
  color: ${ColorPalette.light};
`;
