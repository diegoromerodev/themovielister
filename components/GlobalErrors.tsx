import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import styled from "styled-components";
import AppContext from "../lib/AppContext";
import { AppDataContext } from "../lib/types";
import ColorPalette from "../styles/ColorPalette";

const ErrorItem = styled.li`
  padding: 1rem;
  border: 3px solid ${ColorPalette.light}5a;
  background: ${ColorPalette.error};
  font-weight: 650;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ErrorList = styled.ul`
  display: grid;
  gap: 1rem;
  list-style-type: none;
  padding: 1rem;
  max-width: 900px;
  margin: 0 auto;
`;

function GlobalErrors() {
  const [appData]: AppDataContext = useContext(AppContext);
  if (!appData.currentErrors) return null;
  return (
    <ErrorList>
      {appData.currentErrors.map((err) => (
        <ErrorItem>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            color={`${ColorPalette.darker}7a`}
          />
          {err}
        </ErrorItem>
      ))}
    </ErrorList>
  );
}

export default GlobalErrors;
