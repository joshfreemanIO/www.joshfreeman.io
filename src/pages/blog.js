import React from 'react'
import Layout from '../components/Layout'
import Article from '../components/Article'
import styled from 'styled-components'

const BlogTitle = styled.h1`
  padding-bottom: 36px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`

const Page = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <BlogTitle>Latest Articles</BlogTitle>

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
