import styled from "styled-components";
import ColorPalette from "../styles/ColorPalette";

export const PrimaryThinHeader = styled.h2`
  font-size: 1.5rem;
  color: ${ColorPalette.light};
  font-weight: 500;
`;

export const SecondaryHeader = styled.h2`
  font-size: 1.2rem;
  color: ${ColorPalette.lightGray};
`;

export const SecondaryParagraph = styled.p`
  font-size: 0.9rem;
  color: ${ColorPalette.lightGray};
`;

interface NoMediaProps {
  headerText: string;
  secondaryText: string;
}

const NoPostsSign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
  h3 {
    font-size: 4rem;
    color: ${ColorPalette.gray};
    font-weight: 750;
  }
  h5 {
    font-weight: 600;
    color: ${ColorPalette.dark};
    font-size: 2rem;
  }
`;

export function NoMediaSign({ headerText, secondaryText }: NoMediaProps) {
  return (
    <NoPostsSign>
      <h3>{headerText}</h3>
      <h5>{secondaryText}</h5>
    </NoPostsSign>
  );
}
