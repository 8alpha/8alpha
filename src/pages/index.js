import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 6rem;
  color: #f8fafc;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Name = styled.div`
  font-size: 3rem;
`;

const Locations = styled.div`
  padding-top: 1.5rem;
  font-size: 1.875rem;
`;

const Home = () => (
  <Layout>
    <Container>
      <Name>8ALPHA</Name>
      <Locations>Auckland | San Francisco | Tokyo</Locations>
    </Container>
  </Layout>
);

export default Home;
