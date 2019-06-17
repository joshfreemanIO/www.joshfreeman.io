import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Article from '../components/Article'

const transformNode = node => {
  return {
    path: node.relativePath,
    html: node.childMarkdownRemark.html,

  }
}

const PageLayout = edges => {
  console.log(edges)
  return (
    <Layout>
      {edges.map(({ node }) => {
        const {
          title,
          html,
          path
        } = transformNode(node)

        return (
          <Article key={node.id} title={title} date={date} html={html} />
        )
      })}
    </Layout>
  )
}

const Page = ({
  data: {
    allFile: {
      edges
    }
  }
}) => PageLayout(edges)

export default Page

export const pageQuery = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "papers"}}, sort: {order: ASC, fields: relativePath}) {
      edges {
        node {
          name
          relativePath
          childMarkdownRemark {
            tableOfContents(pathToSlugField: "frontmatter.path", heading: "only show toc from this heading onwards", maxDepth: 2)
            id
            html
            frontmatter {
              path
            }
          }
        }
      }
    }
  }
`
