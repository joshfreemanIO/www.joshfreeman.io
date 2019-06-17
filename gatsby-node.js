const path = require('path')
const transformNode = require('./src/papers/tools/transformNode').default
const createPagesForPapers = require('./src/papers/tools/createPagesForPapers').default

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('src/templates/post.js')

  const blog = await graphql(`
    {
      allMarkdownRemark(
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
            html
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

  blog.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        postPath: node.frontmatter.path
      },
      frontmatter: node.frontmatter
    })

    createPage({
      path: `${node.frontmatter.path}.html`,
      component: blogPostTemplate,
      context: {
        postPath: node.frontmatter.path
      },
      frontmatter: node.frontmatter
    })
  })

  await createPagesForPapers(graphql, createPage)
}

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === 'MarkdownRemark' && getNode(node.parent).sourceInstanceName === 'papers') {
    node = transformNode(node, __dirname)
  }
}
