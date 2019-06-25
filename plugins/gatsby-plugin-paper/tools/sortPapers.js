const compareVersions = require('compare-versions')

const sortPapers = papers => {
  return papers
    .map(({ node }) => node)
    .sort((lhs, rhs) => {
      try {
        return compareVersions(lhs.fields.sectionNumber, rhs.fields.sectionNumber)
      } catch {
        return 0
      }
    })
    .map(({ fields }) => fields)
}

exports.default = sortPapers
