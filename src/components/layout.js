import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import favicon from "../images/favicon.png";

import Footer from "./footer";
import Header from "./header";

const GlobalStyle = createGlobalStyle`
html, body {
    font-family: Questrial, sans-serif;
    font-size: 10px;
    background-color: #001722;
    width: 100%;
    height: 100%;
    --primary-color: #8a8a8d;
    --secondary-color: #dbd9d6;
    --h2-font-size: 2.4rem;
    --p-font-size: 1.6rem;
    @media only screen and (max-width: 640px) {
      font-size: 5px;
    };
    @media only screen and (max-width: 768px) {
      font-size: 7px;
    };
}
`;

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Helmet
      title="8Alpha Partners"
      meta={[
        { name: "description", content: "8Alpha Partners" },
        { name: "keywords", content: "startup" }
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
