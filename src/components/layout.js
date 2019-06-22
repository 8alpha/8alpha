import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";
import favicon from "../resources/favicon.png";

import Footer from "./footer";
import Header from "./header";

const GlobalStyle = createGlobalStyle`
html, body {
    background-color: hsl(199, 100%, 7%);
    --bg-color: hsl(199, 100%, 7%);
    --primary-color: hsl(240, 1%, 55%);
    --secondary-color: hsl(36, 6%, 85%);
    --ternary-color: hsl(348, 63%, 47%);

    font-family: Questrial, "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic Pro", "游ゴシック", "游ゴシック体", "MS PGothic", "ＭＳ Ｐゴシック", sans-serif;
    font-size: calc(8px + (16 - 8) * ((100vw - 500px) / (7680 - 500)));

    --h2-font-size: 3.0rem;
    --h2-letter-spacing: 0.2rem;
    --p-font-size: 2.0rem;
    --p-letter-spacing: 0.1rem;

   @media screen and (max-width: 1799px) {
    margin: 0;
    width: 100vw;
    height: 100vh;
   }

   @media screen and (min-width: 1800px) {
     max-width: 72%;
     margin: auto;
   }


}
`;

const Layout = ({ location, children, intl }) => (
  <div>
    <GlobalStyle />
    <Helmet
      title={intl.formatMessage({ id: "title" })}
      meta={[
        { name: "description", content: "8Alpha Partners" },
        { name: "keywords", content: "startup" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
    <Header location={location} />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired
};

export default injectIntl(Layout);
