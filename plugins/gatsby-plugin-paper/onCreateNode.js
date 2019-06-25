const buildPagePath = (absolutePath, projectPath) => {
  return absolutePath
    .replace(projectPath, '')
    .replace('src/', '')
    .replace(/\d+-/g, '')
    .replace(/\.mdx?$/, '')
}

const buildSectionNumber = path => {
  return (path.match(/\/?\d+-/g) || [])
    .map(capture => capture.replace('/', '').replace('-', ''))
    .join('.')
}

const fetchPaperName = path => {
  return path
    .replace('/papers/', '')
    .replace(/\/.*/, '')
}

const ensureTitle = (suppliedTitle, path) => {
  return suppliedTitle || path.match(/.*\/(.*)$/)[1] || 'missing-title-and-path'
}

const transformNode = (node, createNodeField) => {
  const projectPath = require('path').resolve(__dirname, './../../')
  const path = buildPagePath(node.fileAbsolutePath, projectPath)
  const sectionNumber = buildSectionNumber(node.fileAbsolutePath)
  const paper = fetchPaperName(path)
  const title = ensureTitle(node.frontmatter.title, path)

  const fields = {
    path,
    sectionNumber,
    paper,
    title
  }

  Object.entries(fields).forEach(([name, value]) => {
    createNodeField({
      node,
      name,
      value
    })
  })

  return node
}

const onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx' && node.frontmatter.paperdata) {
    createNodeField({
      node,
      name: 'paperdata',
      value: true
    })

    return node
  }

  if (node.internal.type === 'Mdx' && getNode(node.parent).sourceInstanceName === 'papers') {
    return transformNode(node, createNodeField)
  }

  return {}
}

exports.default = onCreateNode
