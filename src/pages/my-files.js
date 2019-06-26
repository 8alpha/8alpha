import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import { Section, Table } from "../css/style";

const MyFiles = ({ data }) => (
  <Layout location="/my-files/">
    <Section>
      <h2>{"My Site\u2019s Files"}</h2>
      <Table>
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
      </Table>
    </Section>
  </Layout>
);

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
