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
  font-size: 2.6rem;
`;

const Home = () => (
  <Layout>
    <StyledBackgroundSection />
    <hr />
    <Container>
      <AboutHead>ABOUT US</AboutHead>
      <AboutDesc>
        8ALPHA provides technology, strategic development and corporate finance
        advisory services to the world’s most innovative companies. Our teams
        based in San Francisco, Tokyo and Auckland harness broad industry
        experience across billions in transaction and patent value.
      </AboutDesc>
    </Container>
    <TeamSection />
  </Layout>
);

export default Home;
