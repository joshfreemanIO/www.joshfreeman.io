import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import OpenGraph from '../components/OpenGraph'

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const NavigationLink = ({ node } = { frontmatter: {} }) => {
  if (node === undefined || node.frontmatter === undefined) {
    return <Link to="/" />
  }

  const { path, title } = node.frontmatter

  return <Link to={path}>{title}</Link>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  flex-grow: 1;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
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

    <Content dangerouslySetInnerHTML={{ __html: content }} />

    <Links>
      <NavigationLink node={previous} />
      <NavigationLink node={next} />
    </Links>
  </Container>
)

const Template = ({ data, pageContext }) => {
  const { html } = data.markdownRemark
  const { sectionNumber, title } = data.markdownRemark.frontmatter

  return (
    <Layout>
      {/* <OpenGraph {...frontmatter} /> */}
      <PaperPage
        paperdata={pageContext.paperdata}
        sectionNumber={sectionNumber}
        title={title}
        previous={pageContext.previous}
        next={pageContext.next}
        content={html}
      />
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        title
        sectionNumber
        path
        paper
      }
    }
  }
`

export default Template
