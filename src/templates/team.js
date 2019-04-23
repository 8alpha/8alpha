import React from "react";
import styled from "styled-components";
import { Link, StaticQuery, graphql } from "gatsby";
import { Img } from "gatsby-image";

import alexKelley from "../images/partners/alex-kelley.png";
import aboutUs from "../images/about-us.png";

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

const StyledPicLink = styled(Link)`
  color: green;
  text-decoration: none;
  &:hover {
    border: 2px solid white;
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
  flex-basis: 15%;
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
  const team = data.team;

  const MenuFragment = ({ path, name }) => {
    return (
      <MenuItem>
        <StyledLink to={path} activeStyle={{ borderBottom: `2px solid white` }}>
          {name}
        </StyledLink>
      </MenuItem>
    );
  };

  return (
    <Layout>
      <Menu>
        <MenuFragment path="/team/about-us" name="About Us" />
        <MenuFragment path="/team/partners/nick-divehall" name="Partners" />
        <MenuFragment path="/team/advisors/john-doe" name="John Doe" />
      </Menu>
      <Wrapper>
        <Photos>
          <Photo>
            {/* <Img fixed={bioQuery.data.alexKelley.childImageSharp.fixed} /> */}
            {/* <StyledPicLink
                          to="/team/about-us/"
                          activeStyle={{ border: `2px dotted white` }}
                          > */}
            <img src={aboutUs} alt="Group photo" />
            {/* </StyledPicLink> */}
          </Photo>
        </Photos>
        <Bio dangerouslySetInnerHTML={{ __html: team.html }} />
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
    team: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        path
      }
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
