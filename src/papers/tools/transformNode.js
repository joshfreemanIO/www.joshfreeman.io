const buildPagePath = (absolutePath, projectPath) => {
  return absolutePath
    .replace(projectPath, '')
    .replace('src/', '')
    .replace(/\d+-/g, '')
    .replace(/\.md$/, '')
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

const transformNode = (node, projectPath) => {
  const path = buildPagePath(node.fileAbsolutePath, projectPath)
  const sectionNumber = buildSectionNumber(node.fileAbsolutePath)
  const paper = fetchPaperName(path)
  const title = ensureTitle(node.frontmatter.title, path)

  node.frontmatter = Object.assign({}, node.frontmatter, {
    path,
    sectionNumber,
    paper,
    title
  })

  return node
}

exports.default = transformNode
