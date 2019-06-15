import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";

import { SectionStyle } from "../components/styled";
/* import { linkedIn } from "../resources/icons"; */
import gatsbyIntlLanguage from "../utilities/gatsbyintllanguage";
import Layout from "../components/layout";

const PhotosContainer = styled.div`
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 599px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Image = styled(Img)`
  border: solid 2px;
  border-color: var(--primary-color);
  border-bottom-left-radius 1.5rem;
  border-top-right-radius 1.5rem;
  transition: all 0.3s ease-out;
  filter: grayscale(100%);
  cursor: pointer;


  &:hover {
    filter: none;
  }
`;

const Team = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      allTeamJson {
        edges {
          node {
            slug
            name
            image {
              childImageSharp {
                fluid(maxWidth: 480) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  const language = gatsbyIntlLanguage();

  const Photos = () =>
    data.allTeamJson.edges.map(edge => {
      const member = edge.node;
      return (
        <Link key={member.slug} to={`/team/${member.slug}/`}>
          <Image
            key={member.slug}
            fluid={member.image.childImageSharp.fluid}
            alt={member.name}
          />
        </Link>
      );
    });

  return (
    <Layout location="/team/">
      <SectionStyle>
        <h2 lang={language}>{intl.formatMessage({ id: "teamHeading" })}</h2>
        <PhotosContainer>
          <Photos />
        </PhotosContainer>
      </SectionStyle>
    </Layout>
  );
};

Team.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Team);
