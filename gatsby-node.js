const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    let path_ = ``;

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      /* TODO: refactor this if statement to use switch once you
       * add the updates page
       */

      if (node.frontmatter.template === "services") {
        path_ = path.resolve(`./src/templates/services.js`);
      } else {
        path_ = path.resolve(`./src/templates/team.js`);
      }
      createPage({
        path: node.fields.slug,
        component: path_,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    });
  });
};
