import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10rem;
  color: #dddddd;
  margin-left: 10rem;
  margin-right: 10rem;
`;

const SectionHeader = styled.div`
  font-size: 5rem;
  text-align: center;
  color: #dc143c;
`;

const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  /* border-style: solid;
    * border-color: red; */
`;

const Photo = styled.div`
  flex: 0 0 20%;
  margin-right: 2rem;
  margin-top: 2rem;
  border-style: solid;
  border-color: #fffff0;
`;

const TeamSection = () => (
  <StaticQuery
    query={graphql`
      fragment fluidImage on File {
        childImageSharp {
          fluid(maxWidth: 480, maxHeight: 720) {
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
      const alexKelley = data.alexKelley.childImageSharp.fluid;
      const nickDivehall = data.nickDivehall.childImageSharp.fluid;
      const markLindon = data.markLindon.childImageSharp.fluid;
      const lukePeterson = data.lukePeterson.childImageSharp.fluid;
      const reubenTucker = data.reubenTucker.childImageSharp.fluid;
      return (
        <Container>
          <SectionHeader>Meet Our Team</SectionHeader>
          <Photos>
            <Photo>
              <Img fluid={nickDivehall} alt="Nick Divehall" />
            </Photo>
            <Photo>
              <Img fluid={alexKelley} alt="Alex Kelley" />
            </Photo>
            <Photo>
              <Img fluid={markLindon} alt="Mark Lindon" />
            </Photo>
            <Photo>
              <Img fluid={lukePeterson} alt="Luke Peterson" />
            </Photo>
            <Photo>
              <Img fluid={reubenTucker} alt="Reuben Tucker" />
            </Photo>
          </Photos>
        </Container>
      );
    }}
  />
);

export default TeamSection;
