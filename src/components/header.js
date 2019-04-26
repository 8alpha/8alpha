import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 1.2rem 5rem 1.2rem 5rem;
`;

const Logo = styled.div`
  color: white;
  font-size: 4rem;
`;

const Tagline = styled.div`
  color: white;
  font-size: 2rem;
`;

const Header = () => (
  <Container>
    <Logo>8ALPHA</Logo>
    <Tagline>GLOBAL FINANCIAL & TECHNOLOGY ADVISORS</Tagline>
  </Container>
);

export default Header;
