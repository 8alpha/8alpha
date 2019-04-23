import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

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

const Section = styled.div`
  color: white;
  width: 80%;

  h2 {
    font-size: 2.25rem;
  }

  p {
    font-size: 2rem;
  }

  li {
    font-size: 2rem;
  }
`;

const Services = ({ data }) => {
  const section = data.markdownRemark;
  return (
    <Layout>
      <Menu>
        <MenuItem>
          <StyledLink
            to="/services/financial/"
            activeStyle={{ borderBottom: `2px solid white` }}
          >
            Financial
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink
            to="/services/marketing/"
            activeStyle={{ borderBottom: `2px solid white` }}
          >
            Marketing
          </StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink
            to="/services/technical/"
            activeStyle={{ borderBottom: `2px solid white` }}
          >
            Technical
          </StyledLink>
        </MenuItem>
      </Menu>
      <Section dangerouslySetInnerHTML={{ __html: section.html }} />
    </Layout>
  );
};

export const bio = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;

export default Services;
