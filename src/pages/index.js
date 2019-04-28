import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import StyledBackgroundSection from "../components/styled-background-section";
import TeamSection from "../components/team-section";

const Container = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 5rem;
`;

const AboutHead = styled.div`
  color: #dc143c;
  padding-top: 4.5rem;
  margin-bottom: 2rem;
  font-size: 4rem;
  text-align: center;
`;

const AboutDesc = styled.div`
  color: #fffff0;
  font-size: 2rem;
`;

const Home = () => (
  <Layout>
    <StyledBackgroundSection />
    <hr />
    <Container>
      <AboutHead>ABOUT US</AboutHead>
      <AboutDesc>
        <p>
          8ALPHA provides technology, strategic development and corporate
          finance advisory services to the world’s most innovative companies.
        </p>
        <p>
          The highly experienced team we have assembled in San Francisco, Tokyo
          and Auckland have catalyzed billions through brand positioning,
          software development, patent portfolio creation, transaction
          structuring, and capital management.
        </p>
      </AboutDesc>
    </Container>
    <TeamSection />
  </Layout>
);

export default Home;
