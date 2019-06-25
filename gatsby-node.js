const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('src/templates/post.js')

  const blog = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          fileAbsolutePath: {
            regex: "/src/posts/.*.md$/"
          }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              excerpt
              path
              ogImage {
                publicURL
              }
              ogImageAlt
              tags
            }
          }
        }
      }
    }
  `)

  if (blog.errors) {
    throw blog.errors
  }

  blog.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        postPath: node.frontmatter.path
      },
      frontmatter: node.frontmatter
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      }
    }
  })
}
