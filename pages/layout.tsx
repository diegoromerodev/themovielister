import PropTypes from "prop-types";
import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "../components/NavBar";
import SecondaryNav from "../components/SecondaryNav";
import AppContext from "../lib/AppContext";
import ColorPalette from "../styles/ColorPalette";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: ${ColorPalette.light};
    }
    body {
        font-family: "Inter";
        color: ${ColorPalette.light};
        background-color: ${ColorPalette.darker};
    }
`;

function Layout({ children }) {
  const [appData] = useContext(AppContext);
  console.log(appData);
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <SecondaryNav />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default Layout;
