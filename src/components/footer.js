import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Container = styled.div`
  color: #fffff0;
  margin: 2rem 5rem 2rem 5rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  li {
    flex: 0 0 5%;
  }

  li:first-child {
    font-size: 1.2rem;
    flex: 0 0 85%;
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        linkedIn: file(absolutePath: { regex: "/linkedin.png/" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 88, maxHeight: 88) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mailTo: file(absolutePath: { regex: "/mail.png/" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 88, maxHeight: 88) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const linkedIn = data.linkedIn.childImageSharp.fluid;
      const mailTo = data.mailTo.childImageSharp.fluid;
      return (
        <Container>
          <ul>
            <li>&copy; 2019 All Rights Reserved</li>
            <li>
              <a href="mailto:info@8alpha.com">
                <Img fluid={mailTo} alt="Mailto:" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/8alpha/about/">
                <Img fluid={linkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </Container>
      );
    }}
  />
);

export default Footer;
