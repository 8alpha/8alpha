import React from "react";

import About from "../components/about";
import Technologies from "../components/technologies.js";
import Process from "../components/process.js";
import Industries from "../components/industries";
import Layout from "../components/layout";
import Team from "../pages/team";
import Technologies from "../components/technologies";
import { TwoColumns } from "../css/style";

const Home = () => (
  <Layout location="/">
    <About />
    <Technologies />
    <TwoColumns>
      <Industries />
      <Process />
    </TwoColumns>
    <Team />
  </Layout>
);

export default Home;
