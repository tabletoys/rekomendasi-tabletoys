/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allGoogleContentSheet(sort: {fields: nomor, order: DESC}, filter: {listAktif: {eq: 1}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  results.data.allGoogleContentSheet.edges.forEach(edge => {
    const boardgame = edge.node

    createPage({
      path: `/bg/${boardgame.slug}/`,
      component: require.resolve("./src/templates/gamepage.js"),
      context: {
        slug: boardgame.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}