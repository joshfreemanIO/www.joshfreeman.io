const path = require('path')
const generatePage = require('./generatePage').default
const fetchPaperData = require('./fetchPaperData').default
const fetchPaperPages = require('./fetchPaperPages').default

const createPagesForPapers = async (graphql, createPage) => {
  const papers = await fetchPaperData(graphql)

  // Create Paper Pages
  await papers.forEach(async paperData => {
    const pages = await fetchPaperPages(graphql, paperData.paper)

    pages
      .map((node, currentIndex) => generatePage(node, pages, currentIndex, paperData))
      .forEach(page => createPage(page))
  })

  // Create Table of Contents
  await papers.forEach(async paper => {
    createPage({
      path: `${paper.path}/table-of-contents`,
      component: path.resolve(`${__dirname}/table-of-contents-template.js`),
      context: {
        pages: await fetchPaperPages(graphql, paper.paper)
      }
    })
  })

  // Create Cover Page
  await papers.forEach(paper => {
    createPage({
      path: paper.path,
      component: path.resolve('src', paper.path, 'cover.js')
    })
  })
}

exports.default = createPagesForPapers
