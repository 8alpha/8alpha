import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const Container = styled.div``;

const Tagline = styled.div`
  color: white;
  font-size: 6rem;
`;

const About = styled.div`
  margin-top: 4rem;
  color: white;
  font-size: 3rem;
`;

const Home = () => (
  <Layout>
    <Container>
      <Tagline>
        <div>THE EDGE FOR</div>
        <div>AMBITIOUS INNOVATORS</div>
      </Tagline>
      <About>
        8ALPHA is providing M&A, Strategic, and Financial services to the most
        innovative technology companies around the world. The versatility of our
        team comes through our combined experience over hundreds of
        transactions, of a broad range of types and sizes, totalling multiple
        billions of dollars.
      </About>
    </Container>
  </Layout>
);

export default Home;
