import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Article from '../components/Article'
import OpenGraph from '../components/OpenGraph'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <OpenGraph {...frontmatter} />
      <Article html={html} {...frontmatter} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
