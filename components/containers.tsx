import styled from "styled-components";

export enum CenteringPositions {
  Center = "center",
  FlexEnd = "flex-end",
  FlexStart = "flex-start",
  Stretch = "stretch",
}

interface FlexRowProps {
  align: CenteringPositions;
  justify: CenteringPositions;
}

export const FlexRow = styled.div<FlexRowProps>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
`;

export const FlexColumn = styled(FlexRow)`
  flex-direction: "column";
`;
