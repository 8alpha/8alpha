import React from "react";

import Layout from "../components/layout";
import About from "../components/about";
import Technologies from "../components/technologies.js";
import Process from "../components/process.js";
import Services from "../components/services.js";

const Home = () => (
  <Layout location="/">
    <About />
    <Technologies />
    <Process />
    <Services />
  </Layout>
);

export default Home;
