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
    background-color: hsl(199, 100%, 7%);
    --primary-color: hsl(240, 1%, 55%);
    --secondary-color: hsl(36, 6%, 85%);
    --ternary-color: hsl(348, 63%, 47%);

    margin: 0;
    width: 100vw;
    height: 100vh;

    font-size: calc(8px + (16 - 8) * ((100vw - 500px) / (3840 - 500)));

    --h2-font-size: 3.0rem;
    --h2-letter-spacing: 0.3rem;
    --p-font-size: 2.0rem;
    --p-letter-spacing: 0.3rem;


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
