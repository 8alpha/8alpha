import React, { useState } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import bioAlexKelley from "../images/bio-alex-kelley.png";
import bioNickDivehall from "../images/bio-nick-divehall.png";
import bioMarkLindon from "../images/bio-mark-lindon.png";
import bioReubenTucker from "../images/bio-reuben-tucker.png";
import bioLukePeterson from "../images/bio-luke-peterson.png";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

const TeamStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;

  font-size: 2.5rem;
`;

const BioStyle = styled.div`
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

const Photos = styled.div`
  padding-right: 5rem;
`;

const Bio = styled.div`
  font-size: 1.5rem;
`;

function Team({ data }) {
  const [name, setName] = useState("about-us");

  function getBio(nameObj) {
    const bio = data.allMarkdownRemark.edges.find(
      ({ node }) => node.frontmatter.title == nameObj.name
    );

    return (
      <Bio>
        <div dangerouslySetInnerHTML={{ __html: bio.node.html }} />
      </Bio>
    );
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
      <Photos>
        {team.map(name => (
          <button key={name} onClick={() => setName(name)}>
            <img alt="bio photo" src={convert(name)} />
          </button>
        ))}
      </Photos>
    );
  }

  return (
    <Layout>
      <Container>
        <TeamStyle>
          <div>Partners</div>
          <TeamPhotos />
        </TeamStyle>
        <BioStyle>{getBio({ name })}</BioStyle>
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
