import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";

import { SectionStyle } from "./styled";
import { linkedIn } from "../resources/icons";
import gatsbyIntlLanguage from "../utilities/gatsbyintllanguage";

const PhotosContainer = styled.div`
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 599px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PhotoContainer = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;

  border-style: solid;
  border-color: var(--secondary-color);
`;

const Caption = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  justify-items: center;
  padding-left: 0.5vw;
  padding-right: 0.5vw;

  background-color: black;
  color: var(--secondary-color);

  .icon {
  }

  @media screen and (max-width: 599px) {
    .icon {
      transform: scale(0.75);
      transition: all ease 0.2s;
      &:hover {
        transform: scale(0.85);
      }
    }
    .captionItem {
      font-size: calc(var(--p-font-size) * 0.65);
      letter-spacing: calc(var(--p-letter-spacing) * 0.65);
    }
  }

  @media screen and (min-width: 600px) {
    .icon {
      transform: scale(0.8);
      transition: all ease 0.2s;
      &:hover {
        transform: scale(0.9);
      }
    }
    .captionItem {
      font-size: calc(var(--p-font-size) * 0.7);
      letter-spacing: calc(var(--p-letter-spacing) * 0.7);
    }
  }

  @media screen and (min-width: 1200px) {
    .icon {
      transform: scale(0.9);
      transition: all ease 0.2s;
      &:hover {
        transform: scale(1);
      }
    }
    .captionItem {
      font-size: calc(var(--p-font-size) * 0.8);
      letter-spacing: calc(var(--p-letter-spacing) * 0.8);
    }
  }

  @media screen and (min-width: 1800px) {
    .icon {
      transform: scale(1);
      transition: all ease 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
    .captionItem {
      font-size: var(--p-font-size);
      letter-spacing: var(--p-letter-spacing);
    }
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
          slug: "nickdivehall",
        },
        {
          photo: data.alexKelley.childImageSharp.fluid,
          alt: "Alex Kelley",
          slug: "alexdkelley",
        },
        {
          photo: data.markLindon.childImageSharp.fluid,
          alt: "Mark Lindon",
          slug: "mark-lindon-0656a1104",
        },
        {
          photo: data.lukePeterson.childImageSharp.fluid,
          alt: "Luke Peterson",
          slug: "lupeterson",
        },
        {
          photo: data.reubenTucker.childImageSharp.fluid,
          alt: "Reuben Tucker",
          slug: "reuben-tucker-5212b269",
        },
      ];

      const Photos = () =>
        cards.map(card => {
          const fullName = card.alt;

          return (
            <PhotoContainer key={card.slug}>
              <Img fluid={card.photo} alt={card.alt} />
              <Caption>
                <div className="captionItem">{fullName}</div>
                <a
                  className="captionitem icon"
                  href={`https://www.linkedin.com/in/${card.slug}/`}
                >
                  {linkedIn}
                </a>
              </Caption>
            </PhotoContainer>
          );
        });

      return (
        <SectionStyle>
          <h2 lang={language}>{intl.formatMessage({ id: "teamHeading" })}</h2>
          <PhotosContainer>
            <Photos />
          </PhotosContainer>
        </SectionStyle>
      );
    }}
  />
);

Team.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Team);
