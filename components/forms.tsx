import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

export const StyledTextInput = styled.input`
  background: transparent;
  border: 1px solid ${ColorPalette.gray};
  padding: 0.5rem;
  font-family: Inter;
  color: ${ColorPalette.light};
  outline: none;
  font-size: 1.2rem;
  ::placeholder {
    color: ${ColorPalette.lightGray};
  }
`;

export const PostBodyArea = styled.textarea`
  background: transparent;
`;
