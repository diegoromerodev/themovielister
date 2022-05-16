import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import { DisappearResponsiveCont } from "../components/containers";
import GlobalErrors from "../components/GlobalErrors";
import NavBar from "../components/NavBar";
import SecondaryNav from "../components/SecondaryNav";
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

const StickyNavBarCont = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1;
`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <GlobalErrors />
      <StickyNavBarCont>
        <NavBar />
        <DisappearResponsiveCont>
          <SecondaryNav />
        </DisappearResponsiveCont>
      </StickyNavBarCont>
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default Layout;
