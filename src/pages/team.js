import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { injectIntl, Link } from "gatsby-plugin-intl";

import { Section } from "../css/style";
import Layout from "../components/layout";

const PhotosContainer = styled.div`
  display: grid;
  grid-gap: 2vh 2vw;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 599px) {
    grid-gap: 2vh 2vw;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Image = styled(Img)`
  position: relative;
  border: solid 2px;
  border-color: var(--primary-color);
  border-bottom-left-radius 1.5rem;
  border-top-right-radius 1.5rem;
  transition: all 0.3s ease-out;
  filter: grayscale(100%);
  cursor: pointer;
  z-index: 0;



  &:hover {
    filter: none;
    transform: scale(1.02);
  }
`;

const PhotoLink = styled(Link)`
  text-decoration: none;
`;

const Name = styled.div`
  position: relative;
  font-size: calc(var(--p-font-size) * 1.1);
  color: var(--primary-color);
  margin-top: -3.5rem;
  margin-left: 2rem;
  z-index: 1;

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
    text-transform: none;
    font-size: calc(var(--p-font-size) * 1);
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

  const edges = data.allTeamJson.edges;
  const Photos = () =>
    edges.map(edge => {
      const member = edge.node;
      return (
        <PhotoLink key={member.slug} to={`/team/${member.slug}/`}>
          <Image fluid={member.image.childImageSharp.fluid} alt={member.name} />
          <Name lang={intl.locale}>
            {intl.formatMessage({ id: member.name })}
          </Name>
        </PhotoLink>
      );
    });

  return (
    <Layout location="/team/">
      <Section>
        <h2 lang={intl.locale}>{intl.formatMessage({ id: "teamHeading" })}</h2>
        <PhotosContainer>
          <Photos />
        </PhotosContainer>
      </Section>
    </Layout>
  );
};

Team.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Team);
