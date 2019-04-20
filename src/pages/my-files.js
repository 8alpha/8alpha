import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";

const Container = styled.div`
  padding: 10rem 5rem 10rem 5rem;
  color: white;
`;

const MyFiles = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h1>My Site's Files</h1>
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
      </Container>
    </Layout>
  );
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
