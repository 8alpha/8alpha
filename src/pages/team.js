import React, { useState } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import bioAlexKelley from "../images/bio-alex-kelley.png";
import bioNickDivehall from "../images/bio-nick-divehall.png";
import bioMarkLindon from "../images/bio-mark-lindon.png";
import bioReubenTucker from "../images/bio-reuben-tucker.png";
import bioLukePeterson from "../images/bio-luke-peterson.png";

const TeamNavbar = styled.div`
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: wrap;
  justify-content: space-between;
`;

const TeamPics = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const TeamBio = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

function Team({ data }) {
  const [name, setName] = useState("about-us");

  function getBio(nameObj) {
    const bio = data.allMarkdownRemark.edges.find(
      ({ node }) => node.frontmatter.title == nameObj.name
    );

    return <div dangerouslySetInnerHTML={{ __html: bio.node.html }} />;
  }

  function TeamPhotos() {
    const team = [
      "nick-divehall",
      "alex-kelley",
      "mark-lindon",
      "luke-peterson",
      "reuben-tucker",
    ];

    const convert = name => {
      switch (name) {
        case "nick-divehall":
          return bioNickDivehall;
          break;
        case "alex-kelley":
          return bioAlexKelley;
          break;
        case "mark-lindon":
          return bioMarkLindon;
          break;
        case "luke-peterson":
          return bioLukePeterson;
          break;
        case "reuben-tucker":
          return bioReubenTucker;
          break;
      }
    };

    return (
      <TeamPics>
        {team.map(name => (
          <button key={name} onClick={() => setName(name)}>
            <img alt="bio photo" src={convert(name)} />
          </button>
        ))}
      </TeamPics>
    );
  }

  return (
    <Layout>
      <TeamNavbar>
        <ul>
          <li>Partners</li>
        </ul>
      </TeamNavbar>
      <Container>
        <TeamPhotos />
        <TeamBio>{getBio({ name })}</TeamBio>
      </Container>
    </Layout>
  );
}

export const bio = graphql`
  query bio {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
export default Team;
