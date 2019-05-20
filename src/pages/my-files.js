import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import { SectionContainer, SectionHeading } from "../components/styled";

const TableStyle = styled.div`
  color: var(--secondary-color);
  font-size: var(--p-font-size);
  margin-top: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  letter-spacing: 0.3rem;
  font-weight: 100;
`;

const MyFiles = ({ data }) => {
  return (
    <Layout>
      <SectionContainer>
        <SectionHeading>{"My Site\u2019s Files"}</SectionHeading>
        <TableStyle>
          <table>
            <thead>
              <tr>
                <th>relativePath</th>
                <th>prettySize</th>
                <th>extension</th>
                <th>birthTime</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.prettySize}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableStyle>
      </SectionContainer>
    </Layout>
  );
};

MyFiles.propTypes = {
  data: PropTypes.object,
};

export const page = graphql`
  query pages {
    allFile {
      edges {
        node {
          relativePath
          extension
          prettySize
          birthTime
        }
      }
    }
  }
`;

export default MyFiles;
