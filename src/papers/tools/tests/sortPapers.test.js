import sortPapers from '../sortPapers'

test('sortPapers', () => {
  const nodes = [
    { node: { frontmatter: { sectionNumber: '3' } } },
    { node: { frontmatter: { sectionNumber: '4.0.0' } } },
    { node: { frontmatter: { sectionNumber: '4.0.1' } } },
    { node: { frontmatter: { sectionNumber: '2.1' } } },
    { node: { frontmatter: { sectionNumber: '2.2.2' } } },
    { node: { frontmatter: { sectionNumber: '2.2.1' } } },
    { node: { frontmatter: { sectionNumber: '2' } } },
    { node: { frontmatter: { sectionNumber: '1' } } },
  ]

  const result = sortPapers.default(nodes)

  expect(result).toEqual([
    { frontmatter: { sectionNumber: '1' } },
    { frontmatter: { sectionNumber: '2' } },
    { frontmatter: { sectionNumber: '2.1' } },
    { frontmatter: { sectionNumber: '2.2.1' } },
    { frontmatter: { sectionNumber: '2.2.2' } },
    { frontmatter: { sectionNumber: '3' } },
    { frontmatter: { sectionNumber: '4.0.0' } },
    { frontmatter: { sectionNumber: '4.0.1' } },
  ])
})
