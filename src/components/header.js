import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Navbar from "./navbar";

const Container = styled.div`
    padding: 1.2rem 5rem 1.2rem 5rem;
`;

const Header = () => (
    <Container>
        <Navbar />
    </Container>
);

export default Header;
