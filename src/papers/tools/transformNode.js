const fileResolver = require('path')

const paperPageTemplate = fileResolver.resolve('src/templates/paper.js')

const buildPagePath = (absolutePath, projectPath) => {
  return absolutePath
    .replace(projectPath, '')
    .replace('src/', '')
}

const buildSectionNumber = path => {
  return path
    .match(/\/?\d+-/g)
    .map(capture => capture.replace('/', '').replace('-', ''))
    .join('.')
}

const buildFrontmatter = (frontmatter, path) => Object.assign({}, frontmatter, { path })


const transformNode = (node, projectPath) => {
  const pagePath = buildPagePath(node.fileAbsolutePath, projectPath)
  const sectionNumber = buildSectionNumber(node.fileAbsolutePath)
  const frontmatter = buildFrontmatter(node.frontmatter, pagePath)

  return {
    ...node,
    path: pagePath,
    context: {
      sectionNumber,
      paperPath: pagePath
    },
    frontmatter,
    component: paperPageTemplate
  }
}


exports.default = transformNode
