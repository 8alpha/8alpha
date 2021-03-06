import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { injectIntl, Link } from "gatsby-plugin-intl";

import { logo, logoActive } from "../resources/icons";
import Language from "./language";
import { NavBar, NavBarLogo, NavBarLink, activeStyles } from "../css/navbar";
import { Spacer } from "../css/style";

const HeaderBox = styled.div`
  margin: 2vh 5vw 10vh 5vw;
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
  const [hover, setHover] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      desktop: file(absolutePath: { regex: "/globe-background.png/" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4076) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const notIndexRoute = location !== "/";
  const imageData = data.desktop.childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <HeaderBox>
        <NavBar>
          <NavBarLogo
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {notIndexRoute ? (
              <Link to="/">{hover ? logoActive : logo}</Link>
            ) : (
              logo
            )}
          </NavBarLogo>
          <Spacer />
          {intl.formatMessage({ id: "navBarTeam" })}
          <Language locale={intl.locale} />
        </NavBar>
        <Description>
          <span lang={intl.locale}>
            {intl.formatMessage({ id: "headerDescription" })}
          </span>
        </Description>
        <Tagline>
          <div>THE EDGE FOR</div>
          <div>AMBITIOUS INNOVATORS</div>
        </Tagline>
      </HeaderBox>
    </BackgroundImage>
  );
};

HeaderSection.propTypes = {
  className: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
};

const Header = styled(HeaderSection)`
  width: 100%;
  height: 100%;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default injectIntl(Header);
