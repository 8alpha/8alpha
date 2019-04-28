import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

import Header from "./header";

const Tagline = styled.div`
  padding-top: 5rem;
  padding-bottom: 2rem;
  padding-left: 5rem;
  color: #fffff0;
  font-size: 5rem;
  font-weight: bold;
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
