import {
  faCircleExclamation,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
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
  p {
    flex: 1;
  }
  .dismiss-btn {
    justify-self: flex-end;
    font-size: 1.4rem;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

const ErrorList = styled.ul`
  display: grid;
  gap: 1rem;
  list-style-type: none;
  padding: 1rem;
  max-width: 900px;
  margin: 0 auto;
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
`;

function GlobalErrors() {
  const [appData, setAppData]: AppDataContext = useContext(AppContext);
  if (!appData.currentErrors) return null;

  const handleDismiss = (dismissText) => {
    setAppData(({ currentErrors, ...prevAppData }) => {
      return {
        ...prevAppData,
        currentErrors: currentErrors.filter((e) => e !== dismissText),
      };
    });
  };

  return (
    <ErrorList>
      {appData.currentErrors.map((err) => (
        <ErrorItem key={`${err}-error`}>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            color={`${ColorPalette.darker}7a`}
          />
          <p>{err}</p>
          <FontAwesomeIcon
            className="dismiss-btn"
            icon={faCircleXmark}
            color={`${ColorPalette.darker}7a`}
            onClick={() => handleDismiss(err)}
          />
        </ErrorItem>
      ))}
    </ErrorList>
  );
}

export default GlobalErrors;
