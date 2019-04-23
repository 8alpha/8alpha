import React from "react";
import styled from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";
import { Img } from "gatsby-image";

import alexKelley from "../images/partners/alex-kelley.png";

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
  padding-top: 2rem;
`;

const Photo = styled.div`
`;

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
                      to="/team/about-us"
                      activeStyle={{ borderBottom: `2px solid white` }}
                  >
                      About Us
                  </StyledLink>
              </MenuItem>
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
                  <Photo>
                      {/* <Img fixed={bioQuery.data.alexKelley.childImageSharp.fixed} /> */}
                      <img src={alexKelley} alt="Alex Kelley" />
                  </Photo>
              </Photos>
              <Bio dangerouslySetInnerHTML={{ __html: bio.html }} />
          </Wrapper>
      </Layout>
  );
};

/* const Team = () => {
 *   return (
 *     <StaticQuery
 *       query={bioQuery}
 *       render={data => {
 *         return (
 *           <Layout>
 *             <Menu>
 *               <MenuItem>
 *                 <StyledLink
 *                   to="/team/partners/nick-divehall/"
 *                   activeStyle={{ borderBottom: `2px solid white` }}
 *                 >
 *                   Partners
 *                 </StyledLink>
 *               </MenuItem>
 *               <MenuItem>
 *                 <StyledLink
 *                   to="/team/advisors/john-doe/"
 *                   activeStyle={{ borderBottom: `2px solid white` }}
 *                 >
 *                   Advisors
 *                 </StyledLink>
 *               </MenuItem>
 *             </Menu>
 *             <Wrapper>
 *               <Photos>
 *                 <div>
 *                   <Img fixed={data.alexKelley.childImageSharp.fixed} />
 *                 </div>
 *               </Photos>
 *               <Bio dangerouslySetInnerHTML={{ __html: data.bio.html }} />
 *             </Wrapper>
 *           </Layout>
 *         );
 *       }}
 *     />
 *   );
 * }; */

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

export default Team;
