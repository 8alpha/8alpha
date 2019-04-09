import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/header";
import "./layout.css";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="8Alpha Partners"
      meta={[
        { name: "description", content: "8Alpha Partners" },
        { name: "keywords", content: "startup" },
      ]}
    />
    <Header />
    <div>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
