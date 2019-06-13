import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";

import { SectionStyle } from "../components/styled";
import { linkedIn } from "../resources/icons";
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


  &:hover {
    filter: none;
  }
`;

const Team = ({ intl }) => (
  <StaticQuery
    query={graphql`
      fragment fluidImage on File {
        childImageSharp {
          fluid(maxWidth: 480) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      query {
        alexKelley: file(
          absolutePath: { regex: "/partners/alex-kelley.png/" }
        ) {
          ...fluidImage
        }
        nickDivehall: file(
          absolutePath: { regex: "/partners/nick-divehall.png/" }
        ) {
          ...fluidImage
        }
        markLindon: file(
          absolutePath: { regex: "/partners/mark-lindon.png/" }
        ) {
          ...fluidImage
        }
        lukePeterson: file(
          absolutePath: { regex: "/partners/luke-peterson.png/" }
        ) {
          ...fluidImage
        }
        reubenTucker: file(
          absolutePath: { regex: "/partners/reuben-tucker.png/" }
        ) {
          ...fluidImage
        }
      }
    `}
    render={data => {
      const language = gatsbyIntlLanguage();

      const cards = [
        {
          photo: data.nickDivehall.childImageSharp.fluid,
          alt: "Nick Divehall",
          slug: "nickdivehall"
        },
        {
          photo: data.alexKelley.childImageSharp.fluid,
          alt: "Alex Kelley",
          slug: "alexdkelley"
        },
        {
          photo: data.markLindon.childImageSharp.fluid,
          alt: "Mark Lindon",
          slug: "mark-lindon-0656a1104"
        },
        {
          photo: data.lukePeterson.childImageSharp.fluid,
          alt: "Luke Peterson",
          slug: "lupeterson"
        },
        {
          photo: data.reubenTucker.childImageSharp.fluid,
          alt: "Reuben Tucker",
          slug: "reuben-tucker-5212b269"
        }
      ];

      const Photos = () =>
        cards.map(card => (
          <Image key={card.alt} fluid={card.photo} alt={card.alt} />
        ));

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
    }}
  />
);

Team.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(Team);
