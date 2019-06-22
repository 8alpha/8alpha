import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { contact, linkedIn, twitter } from "../resources/icons";

const FooterContainer = styled.div`
  color: var(--secondary-color);
  margin: 5vh 5vw 5vh 5vw;
  padding-bottom: 5vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  .copyright {
    flex-basis: 95%;
  }

  .social {
    flex: 1 1 5%;
  }

  @media screen and (max-width: 599px) {
    .icon {
      transform: scale(0.7);
      transition: all ease 0.2s;

      &:hover {
        transform: scale(0.8);
      }
    }
  }

  @media screen and (min-width: 600px) {
    .icon {
      transform: scale(0.8);
      transition: all ease 0.2s;

      &:hover {
        transform: scale(0.9);
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .icon {
      transform: scale(1);
      transition: all ease 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (min-width: 1800px) {
    .icon {
      transform: scale(1.25);
      transition: all ease 0.2s;

      &:hover {
        transform: scale(1.35);
      }
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <div className="copyright">&copy; 2019 All Rights Reserved</div>
    <Link className="social icon" to="/contact/">
      {contact}
    </Link>
    <a className="social icon" href="https://twitter.com/8alphapartners/">
      {twitter}
    </a>
    <a
      className="social icon"
      href="https://www.linkedin.com/company/8alpha/about/"
    >
      {linkedIn}
    </a>
  </FooterContainer>
);

export default Footer;
