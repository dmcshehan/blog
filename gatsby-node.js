const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~images": path.resolve(__dirname, "src/images"),
      },
    },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
    })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query AllBlogs {
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "blog" } } }) {
        edges {
          previous {
            frontmatter {
              title
              path
            }
          }
          node {
            frontmatter {
              path
            }
          }
          next {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)

  const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`)

  result.data.allMarkdownRemark.edges.forEach(({ previous, node, next }) => {
    const path = node.frontmatter.path

    createPage({
      path,
      component: blogPostTemplate,
      context: {
        pagePath: node.frontmatter.path,
        previous,
        next,
      },
    })
  })
}
