import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  li {
    flex: 0 0 auto;
    font-size: 2rem;
    padding-left: 2rem;
  }

  li:nth-child(1) {
    margin-right: auto;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

const Navbar = () => (
  <Wrapper>
    <ul>
      <li>
        <StyledLink to="/">8ALPHA</StyledLink>
      </li>
      <li>
        <StyledLink to="/services/">Services</StyledLink>
      </li>
      <li>
        <StyledLink to="/team/">Team</StyledLink>
      </li>
      <li>
        <StyledLink to="/updates/">Updates</StyledLink>
      </li>
    </ul>
  </Wrapper>
);

export default Navbar;
