import React from 'react'
import { graphql } from 'gatsby'
import Article from '@components/Article'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const PageLayout = edges => (
  <>
    {edges.map(({ node }) => {
      const { body } = node.code
      const { title, date } = node.frontmatter

      return (
        <Article
          key={node.id}
          title={title}
          date={date}
          html={(
            <MDXRenderer>
              {body}
            </MDXRenderer>
        )}
        />
      )
    })}
  </>
)

const Page = ({ data: { allMdx: { edges } } }) => PageLayout(edges)

export default Page

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        fileAbsolutePath: {
          regex: "/src/posts/.*.md$/"
        }
      }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          code {
            body
          }
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
