import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import { Container } from "./styled";

const Logo = styled.div`
  color: var(--primary-color);
  font-weight: bold;
  font-size: 4.5rem;
  letter-spacing: 0.2rem;
`;

const Description = styled.div`
  color: var(--secondary-color);
  font-size: var(--p-font-size);
  letter-spacing: 0.2rem;
`;

const Tagline = styled.div`
  padding-top: 2rem;
  color: var(--secondary-color);
  font-size: var(--h2-font-size);
  font-weight: bold;
  letter-spacing: 0.2rem;
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
          <Container>
            <Logo>8ALPHA</Logo>
            <Description>GLOBAL TECHNOLOGY & FINANCIAL ADVISORS</Description>
            <Tagline>
              <div>THE EDGE FOR</div>
              <div>AMBITIOUS INNOVATORS</div>
            </Tagline>
          </Container>
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
  background-position: center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default Header;
