import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import logo from "../images/logo.svg";

const HeaderContainer = styled.div`
  margin: 2rem 5rem 21rem 5rem;
`;

const Description = styled.div`
  color: var(--secondary-color);
  font-size: var(--p-font-size);
  letter-spacing: 0.3rem;
`;

const Tagline = styled.div`
  padding-top: 2rem;
  color: var(--secondary-color);
  font-size: var(--h2-font-size);
  font-weight: bold;
  letter-spacing: 0.3rem;
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
            <object data={logo} width="250" height="110" />
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
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Header;
