import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Article from '../components/Article'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { frontmatter, html } = data.markdownRemark
  const {
    title, date, postImage, postImageAlt
  } = frontmatter

  return (
    <Layout>
      <Helmet>
        <meta property="og:title" content="Vietnamese Cards (Tiến lên)" />
        <meta property="og:description" content="The national game of Vietnam, best played with 4 players" />
        <meta property="og:image" content />
        <meta property="og:url" content="https://www.joshfreeman.io/vc" />
        <meta property="og:site_name" content="The Personal Site for Josh Freeman" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content={postImageAlt} />
        <meta name="twitter:image" content={postImage} />
        <meta name="twitter:site" content="@joshfreemanIO" />
      </Helmet>
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
        postImage
        postImageAlt
      }
    }
  }
`
