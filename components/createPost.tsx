import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

export const CreatePostForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export const RichEditorWrapper = styled.div`
  .editor-toolbar {
    background-color: ${ColorPalette.darker};
    border: 1px solid ${ColorPalette.gray};
    align-items: center;
    justify-content: center;
    border-radius: 0;
    margin-bottom: 0;
  }
  .editor-body {
    padding: 0.5rem 1rem;
    border: 1px solid ${ColorPalette.gray};
    border-top: none;
    min-height: 50vh;
  }
  .rdw-option-wrapper {
    background-color: ${ColorPalette.lightGray};
    border-radius: 0;
    border: 1px solid ${ColorPalette.gray};
    a {
      color: ${ColorPalette.darker};
      border: 1px solid red;
    }
    &:hover {
      background-color: ${ColorPalette.light};
      border: 1px solid transparent;
    }
  }
  .rdw-dropdown-wrapper {
    color: ${ColorPalette.darker};
  }
`;

export const StyledSelect = styled.select`
  color: ${ColorPalette.light};
  padding: 1rem;
  border: 1px solid ${ColorPalette.gray};
  font-family: "INTER";
  background: ${ColorPalette.darker};
`;
