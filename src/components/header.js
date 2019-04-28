import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0rem 10rem 1.2rem 10rem;
`;

const Logo = styled.div`
  padding-top: 2rem;
  color: #dc143c;
  font-weight: bold;
  font-size: 6rem;
`;

const Description = styled.div`
  color: #fffff0;
  font-size: 2rem;
`;

const Header = () => (
  <Container>
    <Logo>8ALPHA</Logo>
    <Description>GLOBAL TECHNOLOGY & FINANCIAL ADVISORS</Description>
  </Container>
);

export default Header;
