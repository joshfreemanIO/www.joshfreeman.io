const path = require('path')

const pageTemplate = (node, paperdata) => {
  if (node.template) {
    return path.resolve(node.template)
  }

  if (paperdata.template) {
    return path.resolve(paperdata.template)
  }

  return path.resolve(`${__dirname}/template.js`)
}

const generatePage = (node, papers, currentIndex, paperdata) => {
  const previous = papers[currentIndex - 1]
  const next = papers[currentIndex + 1]

  return {
    path: node.path,
    component: pageTemplate(node, paperdata),
    context: {
      previous,
      next,
      paperdata
    }
  }
}


exports.default = generatePage
