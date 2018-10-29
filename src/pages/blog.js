import React from 'react'
import Layout from '../components/Layout'
import Article from '../components/Article'

const Page = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <h1 className="blog-title">Latest Articles</h1>

    {edges.map(({node}) => {
      const { frontmatter, html } = node
      const { title, date } = frontmatter

      return (
        <Article key={node.id} title={title} date={date} html={html} />
      )
    })}


  </Layout>
)

export default Page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
