import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import StyledBackgroundSection from "../components/styled-background-section";
import TeamSection from "../components/team-section";

const Container = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 5rem;
`;

const AboutHead = styled.div`
  color: #dc143c;
  padding-top: 5rem;
  margin-bottom: 2rem;
  font-size: 5rem;
  text-align: center;
`;

const AboutDesc = styled.div`
  color: #fffff0;
  font-size: 2.7rem;
`;

const Home = () => (
  <Layout>
    <StyledBackgroundSection />
    <hr />
    <Container>
      <AboutHead>About Us</AboutHead>
      <AboutDesc>
        8ALPHA provides M&A, Strategic, Technology and Financial services to the
        most innovative companies around the world. The versatility of our team
        comes through our combined experience over hundreds of various
        transactions and patents totaling billions of dollars. Our partners have
        offices in San Francisco, Tokyo, and Auckland.
      </AboutDesc>
    </Container>
    <TeamSection />
  </Layout>
);

export default Home;
