const generatePage = require('./generatePage').default
const fetchPaperData = require('./fetchPaperData').default
const fetchPaperPages = require('./fetchPaperPages').default

const createPagesForPapers = async (graphql, createPage) => {
  const papers = await fetchPaperData(graphql)

  await papers.forEach(async paperData => {
    const pages = await fetchPaperPages(graphql, paperData.paper)

    pages
      .map((node, currentIndex) => generatePage(node, pages, currentIndex, paperData))
      .forEach(page => createPage(page))
  })
}

exports.default = createPagesForPapers
