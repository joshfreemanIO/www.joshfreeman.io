/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import OpenGraph from '@components/OpenGraph'
import joshLOGO from './logo.png'

const Container = styled.div`
  &:not(:last-of-type) {
    border-bottom: 1px solid #999;
    padding-bottom: 72px;
    margin-bottom: 72px;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75%;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 37px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  width: 30%;
  padding: 36px;
  @media screen and (max-width: 480px) {
    width: 100%;
    order: 10;
  }
`

const Img = styled.img`
  max-width: 100%;
  max-height: 175px;
`
const Logo = ({ name, logo }) => (
  <LogoContainer>
    < Img src={(logo || {}).publicURL} alt={`The logo for ${name}`} />
  </LogoContainer>
)

const P = styled.p`
  margin-bottom: 0;
`

const SectionHeader = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
`

const Content = styled.p`
  margin-left: 24px;
  list-style: disc;
`

const Wow = styled.em`
  font-style: italic;
`

const Work = ({ name, achievements, date, language, framework, platform, description, summary, logo }) => {
  return (
    <Container>

      <Header>

        <Logo logo={logo} alt="" name={name} />

        <Details>
          <h2>{name}</h2>
          <P>
            Language:&nbsp;
            <Wow>{language}</Wow>
          </P>
          <P>
            Framework:&nbsp;
            <Wow>{framework}</Wow>
          </P>

          <P>
            Platform:&nbsp;
            <Wow>{platform}</Wow>
          </P>
          <P>
            Date:&nbsp;
            <Wow>{date}</Wow>
          </P>
        </Details>
      </Header>

      <SectionHeader>Description</SectionHeader>
      <Content>{description}</Content>
      <SectionHeader>Role Summary</SectionHeader>
      <Content>{summary}</Content>

      <SectionHeader>Key Technological Achievements</SectionHeader>
      <ul>
        {
          achievements.map(achievement => <Content as="li" key={achievement}>{achievement}</Content>)
        }
      </ul>

    </Container>
  )
}

const Disclaimer = () => {
  return (
    <p>The following applications were built while employed at Grok Interactive.</p>
  )
}

const InsertAt = (collection, index, jsx) => {
  collection.splice(index, 0, jsx)
  return collection
}

const PageLayout = edges => (
  <Layout>
    <OpenGraph title="Software Vitae" ogImage={{ publicURL: joshLOGO }} ogImageAlt="The logo for joshfreeman.io" />

    <h1>Software Vitae</h1>

    <p>
      Currently, I am authoring <a href="https://github.com/backmath/perspective">Perspective</a>, an event-sourcing framework in Elixir. This framework will serve as the foundation for future projects.
    </p>

    <hr />

    {InsertAt(edges.map(({ node }) => {
      return (<Work {...node.frontmatter} key={node.frontmatter.name} />)
    }), 1, <Disclaimer />)}

  </Layout>
)


const Page = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => PageLayout(edges)

export default Page

export const pageQuery = graphql`
  query {
        allMarkdownRemark(
          filter: {
        fileAbsolutePath: {
        regex: "/src/data/.*.md$/"
    }
  }
      sort: {
        order: DESC,
      fields: [fileAbsolutePath]
    }
    ) {
        edges {
      node {
        frontmatter {
      name
      language
      framework
      platform
      date
      description
      summary
      achievements
              logo {
        publicURL
      }
      }
  }
}
}
}
`
