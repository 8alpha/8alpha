import React, { useState } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import bioPhoto from "../images/bio_photo.png";

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

  return (
    <Layout>
      <TeamNavbar>
        <ul>
          <li>Partners</li>
        </ul>
      </TeamNavbar>
      <Container>
        <TeamPics>
          <button onClick={() => setName("alex-kelley")}>
            <img alt="bio photo" src={bioPhoto} />
          </button>
          <button onClick={() => setName("nick-divehall")}>
            <img alt="bio photo" src={bioPhoto} />
          </button>
          <button>
            <img alt="bio photo" src={bioPhoto} />
          </button>
          <button>
            <img alt="bio photo" src={bioPhoto} />
          </button>
          <button>
            <img alt="bio photo" src={bioPhoto} />
          </button>
        </TeamPics>
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
