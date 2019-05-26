import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, StaticQuery, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import { logo } from "../resources/vector-graphics";

const HeaderContainer = styled.div`
  margin: 2vh 5vw 10vh 5vw;
`;

const Description = styled.div`
  padding-top: 0.5vh;
  color: var(--secondary-color);
  font-size: calc(var(--p-font-size) * 0.75);
  letter-spacing: calc(var(--p-letter-spacing) * 0.75);
`;

const Tagline = styled.div`
  padding-top: 4vh;
  color: var(--secondary-color);
  font-size: var(--h2-font-size);
  letter-spacing: var(--h2-letter-spacing);
`;

const HeaderSection = ({ className }) => (
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
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <HeaderContainer>
            <Link to="/">{logo}</Link>
            <Description>GLOBAL TECHNOLOGY & FINANCIAL ADVISORS</Description>
            <Tagline>
              <div>THE EDGE FOR</div>
              <div>AMBITIOUS INNOVATORS</div>
            </Tagline>
          </HeaderContainer>
        </BackgroundImage>
      );
    }}
  />
);

HeaderSection.propTypes = {
  className: PropTypes.string,
};

const Header = styled(HeaderSection)`
  width: 100%;
  height: 100%;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Header;
