import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { Img } from "gatsby-image";

import Layout from "../components/layout";

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

const MenuItem = styled.div`
  flex-basis: 10%;
  font-weight: bold;
  font-size: 2.5rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  flex-basis: 50%;
`;

const Photo = styled.div``;

const Bio = styled.div`
  color: white;
  flex-basis: 50%;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 2rem;
  }
`;

const Team = ({ data }) => {
  const bio = data.bio;

  return (
    <Layout>
      <Menu>
        <MenuItem>
          <StyledLink
            to="/team/partners/nick-divehall/"
            activeStyle={{ borderBottom: `2px solid white` }}
          >
            Partners
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink
            to="/team/advisors/john-doe/"
            activeStyle={{ borderBottom: `2px solid white` }}
          >
            Advisors
          </StyledLink>
        </MenuItem>
      </Menu>
      <Wrapper>
        <Photos>
          <div>
            <Img fixed={data.alexKelley.childImageSharp.fixed} />
          </div>
        </Photos>
        <Bio dangerouslySetInnerHTML={{ __html: bio.html }} />
      </Wrapper>
    </Layout>
  );
};

export const bioQuery = graphql`
  query($slug: String!) {
    bio: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
    alexKelley: file(absolutePath: { regex: "/alex-kelley.png/" }) {
      childImageSharp {
        fixed(height: 150, width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

/* export const pic = graphql`
 * query picQuery {
 *     alexKelley: file(relativePath: { eq: "images/partners/alex-kelley.png" }) {
 *       childImageSharp {
 *         fixed(height: 150, width: 150) {
 *           ...GatsbyImageSharpFixed
 *         }
 *       }
 *     }
 *   }
 * `;
 *  */
export default Team;
