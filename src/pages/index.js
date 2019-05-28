import React from "react";

import Layout from "../components/layout";
import Team from "../components/team";
import AboutUs from "../components/about-us";

const Home = () => (
  <Layout location="/">
    <AboutUs />
    <Team />
  </Layout>
);

export default Home;
