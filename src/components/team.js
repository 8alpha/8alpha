import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { Container, SectionHeading } from "./styled";

const StyledPhotos = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledPhoto = styled.div`
  flex: 0 2 17%;
  border-style: solid;
  border-color: var(--secondary-color);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Caption = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  background-color: black;
  align-self: center;
  color: var(--secondary-color);
`;

const CaptionItem = styled.div`
  font-size: 2rem;
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
        linkedIn: file(absolutePath: { regex: "/linkedin.png/" }) {
          childImageSharp {
            fixed(width: 44, height: 44) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      const linkedIn = data.linkedIn.childImageSharp.fixed;

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
          const fullName = card.alt.split(" ");

          return (
            <StyledPhoto key={card.slug}>
              <Img fluid={card.photo} alt={card.alt} />
              <Caption>
                <CaptionItem>
                  <a href={`https://www.linkedin.com/in/${card.slug}/`}>
                    <Img fixed={linkedIn} />
                  </a>
                </CaptionItem>
                <CaptionItem>
                  {fullName[0]}
                  <br />
                  {fullName[1]}
                </CaptionItem>
              </Caption>
            </StyledPhoto>
          );
        });

      return (
        <Container>
          <SectionHeading>TEAM</SectionHeading>
          <StyledPhotos>
            <Photos />
          </StyledPhotos>
        </Container>
      );
    }}
  />
);

export default Team;
