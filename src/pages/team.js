import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

import bioPhoto from "../images/bio_photo.png";

const Container = styled.div`
  width: 100%;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

const TeamNavbar = styled.div`
  color: white;
  width: 15%;

  ul {
    list-style: none;
    padding-left: 0;
    padding-bottom: 2rem;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }

  li {
    flex: 0 0 auto;
    font-size: 2.5rem;
  }
`;

const TeamPics = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const Team = () => (
  <Layout>
    <Container>
      <TeamNavbar>
        <ul>
          <li>Partners</li>
          <li>Advisors</li>
        </ul>
      </TeamNavbar>
      <TeamPics>
        <img alt="bio photo" src={bioPhoto} />
        <img alt="bio photo" src={bioPhoto} />
        <img alt="bio photo" src={bioPhoto} />
        <img alt="bio photo" src={bioPhoto} />
        <img alt="bio photo" src={bioPhoto} />
      </TeamPics>
    </Container>
  </Layout>
);

export default Team;
