import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, StaticQuery, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import MenuItemStyle from "./styled";
import { injectIntl } from "gatsby-plugin-intl";

import { logo, logoHighlight } from "../resources/vector-graphics";

const HeaderContainer = styled.div`
  margin: 2vh 5vw 10vh 5vw;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  .logo {
    /* Limit hover to size of Logo */
    flex-basis: 182px;
  }
`;

const Description = styled.div`
  padding-top: 0.5vh;
  color: var(--secondary-color);
  font-size: calc(var(--p-font-size) * 0.75);
  letter-spacing: calc(var(--p-letter-spacing) * 0.75);
  text-transform: uppercase;
`;

const Tagline = styled.div`
  padding-top: 4vh;
  color: var(--secondary-color);
  font-size: var(--h2-font-size);
  letter-spacing: var(--h2-letter-spacing);
  text-transform: uppercase;
`;

const HeaderSection = ({ location, className, intl }) => {
  const [hover, setHover] = useState(false);
  const notIndexRoute = location !== "/";

  return (
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
              <MenuContainer>
                <div
                  className="logo"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {notIndexRoute ? (
                    <Link to="/">{hover ? logoHighlight : logo}</Link>
                  ) : (
                    logo
                  )}
                </div>
                <MenuItemStyle>{`English`}</MenuItemStyle>
              </MenuContainer>
              <Description>
                {intl.formatMessage({ id: "headerDescription" })}
              </Description>
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
};

HeaderSection.propTypes = {
  className: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  intl: PropTypes.func.isRequired
};

const Header = styled(HeaderSection)`
  width: 100%;
  height: 100%;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default injectIntl(Header);
