import React from 'react'
import Helmet from 'react-helmet'
import Layout from '@components/Layout'
import PageHeader from '@components/PageHeader'

const Page = () => (
  <Layout>
    <Helmet>
      <title>About Josh Freeman</title>
    </Helmet>

    <PageHeader>Hi, I&apos;m Josh</PageHeader>

    <p>
      I&apos;m based in San Antonio, Texas with the mission to create good in the world around me. I write React and Elixir for my company&nbsp;
      <a href="https://www.backmath.com" target="_blank" rel="noopener noreferrer">BackMath</a>
      .
    </p>

    <p>After graduating from Texas A&amp;M University in 2011, I taught myself web development programming. Since then, I&apos;ve been searching how to intersect software, business, and my interests in meaningful ways.</p>

    <p>
      This site is a statically-generated Gatsby project based upon React; go read the&nbsp;
      <a href="https://github.com/joshfreemanIO/www.joshfreeman.io">source code</a>
      &nbsp;to see how this how this is built and deployed.
    </p>
  </Layout>
)

export default Page
