import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

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

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

const MenuItem = styled.div`
  flex-basis: 12%;
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

const MenuFragment = ({ path, itemName }) => (
  <MenuItem>
    <StyledLink to={path} activeStyle={{ borderBottom: `2px solid white` }}>
      <>{itemName}</>
    </StyledLink>
  </MenuItem>
);

MenuFragment.propTypes = {
  path: PropTypes.string,
  itemName: PropTypes.string,
};

const Services = ({ data }) => {
  const section = data.markdownRemark;
  return (
    <Layout>
      <Menu>
        <MenuFragment path="/services/financial" itemName="Financial" />
        <MenuFragment path="/services/marketing/" itemName="Marketing" />
        <MenuFragment path="/services/technical/" itemName="Technical" />
      </Menu>
      <Section dangerouslySetInnerHTML={{ __html: section.html }} />
    </Layout>
  );
};

Services.propTypes = {
  data: PropTypes.object,
};

export const bio = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;

export default Services;
