import React from "react";

import Layout from "../components/layout";
import Team from "../components/team";
import About from "../components/about";

const Home = () => (
  <Layout location="/">
    <About />
    <Team />
  </Layout>
);

export default Home;
