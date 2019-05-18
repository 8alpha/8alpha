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
    background-color: #001722;
    width: 100%;
    height: 100%;
    --primary-color: #8a8a8d;
    --secondary-color: #dbd9d6;
    --h2-font-size: 2.4rem;
    --p-font-size: 1.6rem;
    @media only screen and (max-width: 599px) {
      font-size: 5px;
    }
    @media only screen and (min-width: 600px) {
      font-size: 7px;
    }
    @media only screen and (min-width: 900px) {
      font-size: 8px;
    }
    @media only screen and (min-width: 1280px) {
      font-size: 10px;
    }
    @media only screen and (min-width: 1800px) {
      font-size: 14px;
    }
}
`;

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Helmet
      title="8Alpha Partners"
      meta={[
        { name: "description", content: "8Alpha Partners" },
        { name: "keywords", content: "startup" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <Header />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
