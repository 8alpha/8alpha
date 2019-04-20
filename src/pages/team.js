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
  display: grid;
  grid-row-gap: 1rem;
  grid-template-areas:
    "menu bio"
    "photos bio";

  color: white;
`;

const Menu = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  grid-area: menu;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 2.5rem;
    float: left;
    padding-right: 2rem;
  }
`;

const Bio = styled.div`
  grid-area: bio;
  font-family: Helvetica Neue, sans serif;
  h1 {
    margin-top: 0;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

const Photos = styled.div`
  grid-area: photos;
`;

const Photo = styled.div`
  padding-bottom: 1rem;
  padding-right: 1rem;
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
      <div>
        {team.map(name => (
          <button key={name} onClick={() => setName(name)}>
            <Photo>
              <img alt="bio photo" src={convert(name)} />
            </Photo>
          </button>
        ))}
      </div>
    );
  }

  return (
    <Layout>
      <Container>
        <Menu>
          <ul>
            <li>Partners</li>
          </ul>
        </Menu>
        <Photos>
          <TeamPhotos />
        </Photos>
        <Bio>{getBio({ name })}</Bio>
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
