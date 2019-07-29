import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import Technologies from "../components/technologies.js";
import Process from "../components/process.js";

const Home = () => (
  <Layout location="/">
    <About />
    <Technologies />
    <Process />
  </Layout>
);

export default Home;
