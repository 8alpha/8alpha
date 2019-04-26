import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SectionMenu from "../components/SectionMenu";

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

const servicesMenu = [
  { path: "/services/financial", name: "Financial" },
  { path: "/services/marketing/", name: "Marketing" },
  { path: "/services/technical/", name: "Technical" },
];

const Services = ({ data }) => {
  const section = data.markdownRemark;
  return (
    <Layout>
      <SectionMenu menu={servicesMenu} />
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
