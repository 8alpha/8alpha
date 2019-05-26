import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { SectionStyle } from "./styled";
import { linkedIn } from "../resources/icons";

const StyledPhotos = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-center;
  justify-content: space-between;
`;

const PhotoContainer = styled.div`
  flex: 0 0 15vw;
  border-style: solid;
  border-color: var(--secondary-color);

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: auto;
`;

const Caption = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  width: auto;
  height: auto;
  background-color: black;
  align-self: center;
  color: var(--secondary-color);

  @media screen and (max-width: 599px) {
    .icon {
      transform: scale(0.4);
    }
    .captionItem {
      font-size: calc(var(--p-font-size) * 0.3);
      letter-spacing: calc(var(--p-letter-spacing) * 0.5);
      flex: auto;
    }
  }

  @media screen and (min-width: 600px) {
    .icon {
      transform: scale(0.6);
    }
    .captionItem {
      font-size: calc(var(--p-font-size) * 0.65);
      letter-spacing: calc(var(--p-letter-spacing) * 0.65);
      flex: auto;
    }
  }

  @media screen and (min-width: 1200px) {
    .icon {
      transform: scale(0.7);
    }
    .captionItem {
      font-size: calc(var(--p-font-size) * 0.7);
      letter-spacing: calc(var(--p-letter-spacing) * 0.7);
      flex: auto;
    }
  }

  @media screen and (min-width: 1800px) {
    .icon {
      transform: scale(1);
    }
    .captionItem {
      font-size: calc(var(--p-font-size) * 1);
      letter-spacing: calc(var(--p-letter-spacing) * 1);
      flex: auto;
    }
  }
`;

const Team = () => (
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
                  className="captionItem"
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
          <h2>team</h2>
          <StyledPhotos>
            <Photos />
          </StyledPhotos>
        </SectionStyle>
      );
    }}
  />
);

export default Team;
