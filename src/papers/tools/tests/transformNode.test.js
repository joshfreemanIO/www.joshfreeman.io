import transformNode from '../transformNode'

test('transformNode updates the frontmatter', () => {
  const node = { id: '4f74cbbe-d9c4-57ff-b811-e6fb853831d5',
    children: [],
    parent: '23ce4fcd-b697-533b-86bd-6547a1d62655',
    internal: {
      content: 'content',
      type: 'MarkdownRemark',
      contentDigest: '5a17383bd80786ceecaa3716ed049ced',
      owner: 'gatsby-transformer-remark'
    },
    frontmatter: { title: 'Page Title' },
    excerpt: '',
    rawMarkdownBody: 'content',
    fileAbsolutePath: '/www.joshfreeman.io/src/papers/example/8-section/2-page.md' }

  const result = transformNode.default(node, '/www.joshfreeman.io')

  expect(result.frontmatter).toEqual({
    paper: 'example',
    path: '/papers/example/section/page',
    sectionNumber: '8.2',
    title: 'Page Title',
  })
})
