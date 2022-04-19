import { useContext } from "react";
import AppContext from "../lib/AppContext";
import { AppDataContext } from "../lib/types";

function GlobalErrors() {
  const [appData]: AppDataContext = useContext(AppContext);
  if (!appData.currentErrors) return null;
  return (
    <ul>
      {appData.currentErrors.map((err) => (
        <li>{err}</li>
      ))}
    </ul>
  );
}

export default GlobalErrors;
