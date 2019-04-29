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
    background: linear-gradient(#171717, #2f2f2f);
    width: 100%;
    --primary-color: #dc143c;
    --secondary-color: #fffff0;
    --h2-font-size: 2.4rem;
    --p-font-size: 1.6rem;
    @media only screen and (max-width: 600px) {
      font-size: 6px;
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
