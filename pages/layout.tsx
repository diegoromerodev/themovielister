import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import NavBar from "../components/NavBar";
import SecondaryNav from "../components/SecondaryNav";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Inter";
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
