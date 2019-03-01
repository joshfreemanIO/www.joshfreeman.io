import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Article from '../components/Article'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, html } = data.markdownRemark
  const { title, date } = frontmatter

  return (
    <Layout>
      <Article title={title} date={date} html={html} />
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
      }
    }
  }
`
