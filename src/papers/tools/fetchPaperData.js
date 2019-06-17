const fetchPaperData = async (graphql, paper) => {
  const paperInfo = await graphql(`
    {
      markdownRemark(frontmatter: {
          paperdata: {eq: true},
          paper: {eq: "${paper}"}
      }) {
        frontmatter {
          paper
          title
        }
      }
    }
  `)

  return paperInfo.data.markdownRemark.frontmatter
}

exports.default = fetchPaperData
