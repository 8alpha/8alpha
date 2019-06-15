exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allTeamJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (results.error) {
    console.error("Something went wrong during createPages");
    return;
  }
  results.data.allTeamJson.edges.forEach(edge => {
    const member = edge.node;

    createPage({
      path: `/team/${member.slug}/`,
      component: require.resolve("./src/templates/member.js"),
      context: {
        slug: member.slug,
      },
    });
  });
};
