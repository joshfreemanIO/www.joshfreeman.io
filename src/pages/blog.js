import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import Article from '@components/Article'

const PageLayout = edges => (
  <Layout>
    {edges.map(({ node }) => {
      const { frontmatter, html } = node
      const { title, date } = frontmatter

      return (
        <Article key={node.id} title={title} date={date} html={html} />
      )
    })}
  </Layout>
)

const Page = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => PageLayout(edges)

export default Page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fileAbsolutePath: {
          regex: "/src/posts/.*.md$/"
        }
      }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            date
            path
            title
            ogImage {
              publicURL
            }
            ogImageAlt
            tags
          }
        }
      }
    }
  }
`
