import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Article from '../components/Article'
import OpenGraph from '../components/OpenGraph'

// const Template = ({ data }) => {
const Template = data => {
  console.log(data)
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
        date(formatString: "YYYY-MM-DD")
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
