import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import Technologies from "../components/technologies";
import Team from "../pages/team";

const Home = () => (
  <Layout location="/">
    <About />
    <Technologies />
    <Team />
  </Layout>
);

export default Home;
