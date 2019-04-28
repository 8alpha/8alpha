import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 5rem;
`;

const SectionHeader = styled.div`
  font-size: 4rem;
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
  display: flex;
  flex-direction: column;

  flex: 0 0 17.5%;
  margin-right: 2rem;
  margin-top: 2rem;
  border-style: solid;
  border-color: #fffff0;
`;

const Caption = styled.div`
  width: 97%;
  background-color: black;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  align-self: center;
  color: #fffff0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  li {
    font-size: 2rem;
  }

  /* border-style: solid; */
  /* border-color: red; */
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
      const alexKelley = data.alexKelley.childImageSharp.fluid;
      const nickDivehall = data.nickDivehall.childImageSharp.fluid;
      const markLindon = data.markLindon.childImageSharp.fluid;
      const lukePeterson = data.lukePeterson.childImageSharp.fluid;
      const reubenTucker = data.reubenTucker.childImageSharp.fluid;
      const linkedIn = data.linkedIn.childImageSharp.fixed;
      return (
        <Container>
          <SectionHeader>TEAM</SectionHeader>
          <Photos>
            <Photo>
              <Img fluid={nickDivehall} alt="Nick Divehall" />
              <Caption>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/nickdivehall/">
                      <Img fixed={linkedIn} />
                    </a>
                  </li>
                  <li>
                    Nick
                    <br />
                    Divehall
                  </li>
                </ul>
              </Caption>
            </Photo>
            <Photo>
              <Img fluid={alexKelley} alt="Alex Kelley" />
              <Caption>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/alexdkelley">
                      <Img fixed={linkedIn} />
                    </a>
                  </li>
                  <li>
                    Alex
                    <br />
                    Kelley
                  </li>
                </ul>
              </Caption>
            </Photo>
            <Photo>
              <Img fluid={markLindon} alt="Mark Lindon" />
              <Caption>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/mark-lindon-0656a1104/">
                      <Img fixed={linkedIn} />
                    </a>
                  </li>
                  <li>
                    Mark
                    <br />
                    Lindon
                  </li>
                </ul>
              </Caption>
            </Photo>
            <Photo>
              <Img fluid={lukePeterson} alt="Luke Peterson" />
              <Caption>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/lupeterson/">
                      <Img fixed={linkedIn} />
                    </a>
                  </li>
                  <li>
                    Luke
                    <br />
                    Peterson
                  </li>
                </ul>
              </Caption>
            </Photo>
            <Photo>
              <Img fluid={reubenTucker} alt="Reuben Tucker" />
              <Caption>
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/reuben-tucker-5212b269/">
                      <Img fixed={linkedIn} />
                    </a>
                  </li>
                  <li>
                    Reuben
                    <br />
                    Tucker
                  </li>
                </ul>
              </Caption>
            </Photo>
          </Photos>
        </Container>
      );
    }}
  />
);

export default TeamSection;
