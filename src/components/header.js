import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 1.2rem 5rem 1.2rem 5rem;
`;

const Logo = styled.div`
  color: white;
  font-size: 4rem;
`;

const Description = styled.div`
  color: white;
  font-size: 2rem;
`;

const Header = () => (
  <Container>
    <Logo>8ALPHA</Logo>
    <Description>GLOBAL FINANCIAL & TECHNOLOGY ADVISORS</Description>
  </Container>
);

export default Header;
