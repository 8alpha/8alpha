import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import favicon from "../images/favicon.png";

import Footer from "./afooter";

const GlobalStyle = createGlobalStyle`
html, body {
    font-family: Questrial, sans-serif;
    font-size: 10px;
    /* background: #22292f; */
    background: linear-gradient(#171717, #2f2f2f);
    height: 100%;
    width: 100%;
}
`;

const Main = styled.div``;

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
    <Main>
      <div>{children}</div>
    </Main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
