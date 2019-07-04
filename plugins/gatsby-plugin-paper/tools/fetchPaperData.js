const fetchPaperData = async graphql => {
  const paperInfo = await graphql(`
  query {
    allMdx(filter: {fields: {paperdata: {eq: true}}}) {
      edges {
        node {
          frontmatter {
            title
            path
            paper
            template
          }
        }
      }
    }
  }
  `)

  if (paperInfo.errors) {
    throw paperInfo.errors
  }

  return paperInfo.data.allMdx.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    paper: node.frontmatter.paper,
    path: `papers/${node.frontmatter.paper}`,
    template: node.frontmatter.template,
  }))
}

exports.default = fetchPaperData
