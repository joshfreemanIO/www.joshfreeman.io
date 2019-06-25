import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const NavigationLink = ({ path, title }) => {
  if (path === undefined || title === undefined) {
    return <Link to="/" />
  }

  return <Link to={path}>{title}</Link>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  flex-grow: 1;
`

const PaperTitle = styled.p`
  font-style: italic;
  text-decoration: underline;
  text-align: center;
  margin-bottom: 0;
  font-size: 18px;
`

const PageTitle = styled.h1`
  font-size: 24px;
  text-align: center;
`

const PaperPage = ({ content, previous, next, title, sectionNumber, paperdata }) => (
  <Container>
    <PaperTitle>{paperdata.title}</PaperTitle>
    <PageTitle>{sectionNumber} - {title}</PageTitle>

    <MDXRenderer>
      {content}
    </MDXRenderer>

    <Links>
      <NavigationLink {...previous} />
      <NavigationLink {...next} />
    </Links>
  </Container>
)

const Template = ({ data, pageContext }) => {
  const { body } = data.mdx.code
  const { title } = data.mdx.frontmatter
  const { sectionNumber } = data.mdx.fields
  const { next, previous } = pageContext

  return (
    <>
      {/* {/* <OpenGraph {...data.markdownRemark.frontmatter} /> */}
      <PaperPage
        paperdata={pageContext.paperdata}
        sectionNumber={sectionNumber}
        title={title}
        previous={previous}
        next={next}
        content={body}
      />
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
      fields {
        paper,
        paperdata,
        sectionNumber
      }
      code {
        body
      }
    }
  }
`

export default Template
