import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { contact, linkedIn } from "../resources/icons";

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
      transform: scale(0.6);
    }
  }

  @media screen and (min-width: 600px) {
    .icon {
      transform: scale(0.7);
    }
  }

  @media screen and (min-width: 1200px) {
    .icon {
      transform: scale(1);
    }
  }

  @media screen and (min-width: 1800px) {
    .icon {
      transform: scale(1.25);
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <div className="copyright">&copy; 2019 All Rights Reserved</div>
    <Link className="social" to="/contact/">
      {contact}
    </Link>
    <a className="social" href="https://www.linkedin.com/company/8alpha/about/">
      {linkedIn}
    </a>
  </FooterContainer>
);

export default Footer;
