import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Logo from "./logo";
import Navbar from "./navbar";

const Container = styled.div`
  padding-top: 1.2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-bottom: 1.2rem;
`;

const Header = () => (
  <Container>
    <Navbar />
  </Container>
);

export default Header;
