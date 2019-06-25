const createPagesForPapers = require('./tools/createPagesForPapers').default

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  await createPagesForPapers(graphql, createPage)
}

exports.onCreateNode = require('./onCreateNode').default
