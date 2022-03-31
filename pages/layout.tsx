import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import NavBar from "../components/NavBar";
import SecondaryNav from "../components/SecondaryNav";
import ColorPalette from "../styles/ColorPalette";

const GlobalStyles = createGlobalStyle`
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
