import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 6rem;
  color: #f8fafc;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Name = styled.div`
  font-size: 3rem;
`;

const Locations = styled.div`
  padding-top: 1.5rem;
  font-size: 1.875rem;
`;

const ContactUs = styled.div`
  width: 50%;
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const BusinessCard = () => (
  <Layout>
    <Wrapper>
      <Name>8ALPHA</Name>
      <Locations>Auckland | San Francisco | Tokyo</Locations>
      <ContactUs>
        <div>info @ alpha.com</div>
        <div>&copy; 2019 All Rights Reserved</div>
      </ContactUs>
    </Wrapper>
  </Layout>
);

export default BusinessCard;
