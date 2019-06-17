const generatePage = require('./generatePage').default
const sortPapers = require('./sortPapers').default
const fetchPaperData = require('./fetchPaperData').default

const createPagesForPapers = async (graphql, createPage) => {
  const papers = await graphql(`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          path: { regex: "/papers/"},
          paperdata: {ne: true}
        }
      }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            sectionNumber
            paper
          }
        }
      }
    }
  }
`)

  if (papers.errors) {
    throw papers.errors
  }

  const sortedPapers = sortPapers(papers.data.allMarkdownRemark.edges)

  const paperData = await fetchPaperData(graphql, sortedPapers[0].frontmatter.paper)

  sortedPapers
    .map((node, currentIndex) => generatePage(node, sortedPapers, currentIndex, paperData))
    .forEach(page => createPage(page))
}

exports.default = createPagesForPapers
