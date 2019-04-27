import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import StyledBackgroundSection from "../components/styled-background-section";
import TeamSection from "../components/team-section";

const AboutHead = styled.div`
  color: #dc143c;
  padding-top: 5rem;
  font-size: 5rem;
  text-align: center;
`;

const AboutDesc = styled.div`
  padding-top: 2.5rem;
  padding-left: 10rem;
  color: #fffff0;
  font-size: 3rem;
  width: 90%;
  padding-bottom: 2rem;
`;

const Home = () => (
  <Layout>
    <StyledBackgroundSection />
    <hr />
    <AboutHead>About Us</AboutHead>
    <AboutDesc>
      8ALPHA is providing M&A, Strategic, and Financial services to the most
      innovative technology companies around the world. The versatility of our
      team comes through our combined experience over hundreds of transactions,
      of a broad range of types and sizes, totalling multiple billions of
      dollars.
    </AboutDesc>
    <TeamSection />
  </Layout>
);

export default Home;
