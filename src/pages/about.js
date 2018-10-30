import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

const Page = () => (
  <Layout>
    <Helmet>
      <title>About Josh Freeman</title>
    </Helmet>

    <PageHeader>Hi, I'm Josh</PageHeader>

    <p>I'm based in San Antonio, Texas with the mission to create good in the world around me. I write React and Elixir with <a href="https://www.grok-interactive.com" target="_blank" rel="noopener noreferrer">Grok Interactive</a> with a dash of business development thrown into the mix.</p>

    <p>After graduating from Texas A&amp;M University in 2011, I taught myself web development programming. Since then, I've been searching how to intersect software, business, and my interests in meaningful ways.</p>

    <p>This site is a statically-generated Gatsby project based upon React; go read the <a href="https://github.com/joshfreemanIO/www.joshfreeman.io">source code</a> to see how this how this is built and deployed.</p>
  </Layout>
)

export default Page
