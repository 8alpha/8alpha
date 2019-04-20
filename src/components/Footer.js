import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  margin: 1.2rem 5rem 1.2rem 5rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  li {
    flex: 0 0 auto;
    font-size: 1.5rem;
    padding-left: 2rem;
  }

  li:first-child {
    padding-left: 0;
  }

  li:nth-child(1) {
    margin-right: auto;
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const Footer = () => (
  <Container>
    <ul>
      <li>&copy; 2019 All Rights Reserved</li>
      <li>
        <StyledLink href="mailto:info@8alpha.com">Email</StyledLink>
      </li>
      <li>Twitter</li>
      <li>
        <StyledLink href="https://www.linkedin.com/company/8alpha/about/">
          LinkedIn
        </StyledLink>
      </li>
    </ul>
  </Container>
);

export default Footer;
