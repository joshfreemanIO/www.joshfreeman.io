import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Article from '../components/Article'
import OpenGraph from '../components/OpenGraph'

const Template = ({ data }) => {
  const { frontmatter, code } = data.mdx

  return (
    <>
      <OpenGraph {...frontmatter} />
      <Article
        html={(
          <MDXRenderer>
            {code.body}
          </MDXRenderer>
        )}
        {...frontmatter}
      />
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      code {
        body
      }
      frontmatter {
        path
        title
        description
        excerpt
        ogImage {
          publicURL
        }
        ogImageAlt
        tags
      }
    }
  }
`


export default Template
