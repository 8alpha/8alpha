import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { contact, linkedIn } from "../resources/icons";

const FooterContainer = styled.div`
    color: var(--secondary-color);
    margin: 5vh 5vw 5vh 5vw;
    padding-bottom: 5vh;

    ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    }


    flex: 0 0 5%;
    }

    li:first-child {
    font-size: 1.2rem;
    flex-basis: 70%;
    }

    .icon {
    display: inline-block;
    transform: scale(1.0, 1.0);
    }

    }
`;

const Footer = () => (
  <FooterContainer>
    <ul>
      <li>&copy; 2019 All Rights Reserved</li>
      <li>
        <Link to="/contact/">{contact}</Link>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/8alpha/about/" />
        {linkedIn}
      </li>
    </ul>
  </FooterContainer>
);

export default Footer;
