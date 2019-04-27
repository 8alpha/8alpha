import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

import Header from "./header";

const Tagline = styled.div`
  padding-top: 5rem;
  padding-bottom: 2rem;
  padding-left: 10rem;
  color: #ffffff;
  font-size: 5rem;
`;

const About = styled.div`
  padding-top: 2.5rem;
  padding-left: 10rem;
  color: #ffffff;
  font-size: 3rem;
  width: 75%;
  padding-bottom: 5rem;
`;

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(absolutePath: { regex: "/globe-background.png/" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4076) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Header />
          <Tagline>
            <div>THE EDGE FOR</div>
            <div>AMBITIOUS INNOVATORS</div>
          </Tagline>
          <About>
            8ALPHA is providing M&A, Strategic, and Financial services to the
            most innovative technology companies around the world. The
            versatility of our team comes through our combined experience over
            hundreds of transactions, of a broad range of types and sizes,
            totalling multiple billions of dollars.
          </About>
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
