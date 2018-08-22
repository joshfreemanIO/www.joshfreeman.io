import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const Page = () => (
  <Layout>
    <Helmet>
      <title>About Josh Freeman</title>
    </Helmet>

    <h1 className="center">Howdy, I'm Josh</h1>

    <p>I'm based in San Antonio, Texas with the mission to create good in the world around me. I currently program for <a href="https://www.grok-interactive.com" target="_blank" rel="noopener noreferrer">Grok Interactive</a> with a focus on React and Elixir.</p>

    <p>After graduating from Texas A&amp;M University in 2011, I taught myself web development programming and began </p>
    <p>This site is a statically-generated Gatsby project based upon React; if you'd like, you can see the <a href="https://github.com/joshfreemanIO/www.joshfreeman.io">source code</a>.</p>

    <div className="social-group">
      <a className="social-icon linkedin" href="https://www.linkedin.com/in/joshfreemanio/" target="_blank" rel="noopener noreferrer">LinkedIn: (@joshfreemanIO)</a>
      <a className="social-icon instagram" href="https://instagram.com/joshfreemanIO" target="_blank" rel="noopener noreferrer">Instagram: (@joshfreemanIO)</a>
      <a className="social-icon twitter" href="https://twitter.com/joshfreemanIO" target="_blank" rel="noopener noreferrer">Twitter: (@joshfreemanIO)</a>
      <a className="social-icon github" href="https://github.com/joshfreemanIO" target="_blank" rel="noopener noreferrer">Github</a>
    </div>
  </Layout>
)

export default Page
