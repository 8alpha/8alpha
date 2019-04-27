import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10rem;
  color: #dddddd;
`;

const SectionHeader = styled.div`
  font-size: 5rem;
`;

const TeamSection = () => (
  <Container>
    <SectionHeader>Meet Our Team</SectionHeader>
  </Container>
);

export default TeamSection;
