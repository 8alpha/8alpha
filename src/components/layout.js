import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import favicon from "../images/favicon.png";

import Header from "./header";

const GlobalStyles = createGlobalStyle`
html, body {
    font-family: Helvetica Neue, sans-serif;
    font-size: 16px;
    background: linear-gradient(#22292f, #f8fafc);
    height: 100%;
    margin: auto;
}
`;

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Helmet
      title="8Alpha Partners"
      meta={[
        { name: "description", content: "8Alpha Partners" },
        { name: "keywords", content: "startup" },
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <Header />
    <div>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
