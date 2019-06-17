const compareVersions = require('compare-versions')

const sortPapers = papers => {
  return papers
    .map(({ node }) => node)
    .sort((lhs, rhs) => {
      try {
        return compareVersions(lhs.frontmatter.sectionNumber, rhs.frontmatter.sectionNumber)
      } catch {
        return 0
      }
    })
}

exports.default = sortPapers
