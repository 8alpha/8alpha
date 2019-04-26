import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const Container = styled.div`
  height: 100%;
`;

const Tagline = styled.div`
  color: white;
  font-size: 6rem;
`;

const About = styled.div`
  margin-top: 4rem;
  color: white;
  font-size: 3rem;
`;

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(absolutePath: { regex: "/globe-background.jpg/" }) {
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
  background-position: center bottom;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
