import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const FooterContainer = styled.div`
  color: var(--secondary-color);
  margin: 5vh 5vw 5vh 5vw;

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
        contact: file(absolutePath: { regex: "/mail.png/" }) {
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
      const contact = data.contact.childImageSharp.fluid;
      return (
        <FooterContainer>
          <ul>
            <li>&copy; 2019 All Rights Reserved</li>
            <li>
              <Link to="/contact/">
                <Img fluid={contact} alt="contact us" />
              </Link>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/8alpha/about/">
                <Img fluid={linkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </FooterContainer>
      );
    }}
  />
);

export default Footer;
