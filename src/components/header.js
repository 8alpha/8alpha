import React from "react";
import styled from "styled-components";

import Logo from "./logo";
import Navbar from "./navbar";

const Wrapper = styled.div`
  padding-top: 1rem;
  padding-left: 10rem;
  padding-right: 10rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <Navbar />
  </Wrapper>
);

/* const Header = () => {
 *   <Wrapper>
 *     <Logo />
 *     <Navbar />
 *   </Wrapper>;
 * };
 *  */
export default Header;
