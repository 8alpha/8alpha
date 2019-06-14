import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { injectIntl, Link } from "gatsby-plugin-intl";

import { logo, logoActive } from "../resources/vector-graphics";
import Language from "./language";
import gatsbyIntlLanguage from "../utilities/gatsbyintllanguage";
import { Spacer } from "./styled";

const HeaderContainer = styled.div`
  margin: 2vh 5vw 10vh 5vw;
`;

export const NavBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  .logo {
    /* Limit hover to size of Logo */
    flex-basis: 182px;
  }
`;

export const NavBarLanguage = styled(Language)`
  button {
    border: none;
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    font-size: var(--p-font-size);
    color: var(--primary-color);
    letter-spacing: var(--p-letter-spacing);
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      outline: 0;
    }

    &:hover {
      color: var(--secondary-color);
    }

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
    }
  }
`;

export const NavBarLink = styled(Link)`
  font-size: var(--p-font-size);
  color: var(--primary-color);
  letter-spacing: var(--p-letter-spacing);
  text-decoration: none;

  &:active {
    color: var(--secondary-color);
  }

  &:hover {
    text-decoration: underline;
  }

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
  }

  /* button {
    *   border: none;
    *   padding: 0;
    *   background-color: rgba(0, 0, 0, 0);
    *   text-decoration: none;
    *   cursor: pointer;
    *   user-select: none;
    *   font-size: var(--p-font-size);
    *   color: var(--primary-color);
    *   letter-spacing: var(--p-letter-spacing);
    *   -webkit-appearance: none;
    *   -moz-appearance: none;

    *   &:focus {
    *     outline: 0;
    *   }

    *   &:hover {
    *     color: var(--secondary-color);
    *   }

    *   &:lang(ja) {
    *     font-family: "Noto Sans JP", sans-serif;
    *     letter-spacing: normal;
    *   }
    * } */
`;

const Description = styled.div`
  span {
    padding-top: 0.5vh;
    color: var(--secondary-color);
    font-size: calc(var(--p-font-size) * 0.75);
    letter-spacing: calc(var(--p-letter-spacing) * 0.75);
    text-transform: uppercase;

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
      text-transform: none;
    }
  }
`;

const Tagline = styled.div`
  padding-top: 4vh;
  color: var(--secondary-color);
  font-size: var(--h2-font-size);
  letter-spacing: var(--h2-letter-spacing);
  text-transform: uppercase;
`;

const HeaderSection = ({ location, className, intl }) => {
  const language = gatsbyIntlLanguage();
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
              <NavBar>
                <div
                  className="logo"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  {notIndexRoute ? (
                    <Link to="/">{hover ? logoActive : logo}</Link>
                  ) : (
                    logo
                  )}
                </div>
                <Spacer />
                <NavBarLink to="/team/">Team</NavBarLink>
                <NavBarLanguage />
              </NavBar>
              <Description>
                <span lang={language}>
                  {intl.formatMessage({ id: "headerDescription" })}
                </span>
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
  intl: PropTypes.object.isRequired
};

const Header = styled(HeaderSection)`
  width: 100%;
  height: 100%;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default injectIntl(Header);
