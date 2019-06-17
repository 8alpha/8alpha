import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import MemberModal from "../components/member-modal.js";

export const query = graphql`
  query($slug: String!) {
    teamJson(slug: { eq: $slug }) {
      name
      jobTitle
      biography
      linkedIn
      twitter
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

const Member = ({ data, intl }) => {
  const member = data.teamJson;

  return (
    <Layout location={`/${member.slug}/`}>
      <MemberModal member={member} intl={intl} />
    </Layout>
  );
};

Member.propTypes = {
  data: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default injectIntl(Member);
