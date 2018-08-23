import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const Page = () => (
  <Layout>
    <Helmet>
      <title>About Josh Freeman</title>
    </Helmet>

    <h1 className="center">Howdy, I'm Josh</h1>

    <p>I'm based in San Antonio, Texas with the mission to create good in the world around me. I currently program and partner with <a href="https://www.grok-interactive.com" target="_blank" rel="noopener noreferrer">Grok Interactive</a> with a focus on React and Elixir.</p>

    <p>After graduating from Texas A&amp;M University in 2011, I taught myself web development programming and began learning how the world of software, business, and my interests work and how they could intersect in meaningful ways.</p>

    <p>This site is a statically-generated Gatsby project based upon React; go read the <a href="https://github.com/joshfreemanIO/www.joshfreeman.io">source code</a> to see how this how this is built and deployed.</p>
  </Layout>
)

export default Page
