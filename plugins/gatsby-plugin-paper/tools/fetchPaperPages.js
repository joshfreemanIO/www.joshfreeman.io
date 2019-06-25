const sortPapers = require('./sortPapers').default

const fetchPaperData = async (graphql, paper) => {
  const pages = await graphql(`
  query {
    allMdx(
      filter: {
        fields: {
          paper: {
            eq: "${paper}"
          },
          paperdata: {
            ne: true
          }
        }
      }) {
      edges {
        node {
          fields {
            title
            path
            sectionNumber
            paper
          }
          frontmatter {
            template
          }
        }
      }
    }
  }
`)

  if (pages.errors) {
    throw pages.error
  }

  return sortPapers(pages.data.allMdx.edges)
}

exports.default = fetchPaperData
