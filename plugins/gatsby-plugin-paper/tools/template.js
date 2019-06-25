import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const PageTemplate = data => {
  return (
    <>
      <MDXRenderer>{data.data.mdx.code.body}</MDXRenderer>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($path: String) {
    mdx(fields: { path: { eq: $path } }) {
      id
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`

export default PageTemplate
