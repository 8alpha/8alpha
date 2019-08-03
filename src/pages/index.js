import React from "react";

import About from "../components/about";
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
    </TwoColumns>
    <Team />
  </Layout>
);

export default Home;
