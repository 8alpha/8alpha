import React from "react";
import styled from "styled-components";

import Logo from "./logo";
import Navbar from "./navbar";

const Container = styled.div`
  padding-top: 1rem;
  margin-left: 10rem;
  margin-right: 10rem;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => (
  <Container>
    <Logo />
    <Navbar />
  </Container>
);

export default Header;
