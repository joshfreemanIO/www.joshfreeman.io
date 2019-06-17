const fileResolver = require('path')

const paperPageTemplate = fileResolver.resolve('src/templates/paper.js')

const generatePage = (node, papers, currentIndex, paperdata) => {
  const previous = papers[currentIndex - 1]
  const next = papers[currentIndex + 1]

  return {
    path: node.frontmatter.path,
    component: paperPageTemplate,
    context: {
      previous,
      next,
      paperdata
    }
  }
}


exports.default = generatePage
