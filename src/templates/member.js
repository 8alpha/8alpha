import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import { SectionStyle } from "../components/styled";

export const query = graphql`
  query($slug: String!) {
    teamJson(slug: { eq: $slug }) {
      name
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Member = ({ data }) => {
  const member = data.teamJson;

  return (
    <Layout location="/alex-kelley/">
      <SectionStyle>
        <h2>{member.name}</h2>
        <Image fluid={member.image.childImageSharp.fluid} alt={member.name} />
      </SectionStyle>
    </Layout>
  );
};

export default injectIntl(Member);
