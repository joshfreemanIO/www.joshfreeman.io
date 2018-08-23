import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const Page = () => (
  <Layout>
    <Helmet>
      <title>Contact Josh Freeman</title>
    </Helmet>

    <h1>Keep Conversation Alive</h1>

    <p>I'm grateful  you'd like to get in touch with me!</p>

    <p>If you'd like to ask a direct question, please use the contact form below. If you're hip to social media, then check out the icons below.</p>

    <div className="input-row">
      <div className="input-group half">
        <label htmlFor="input-name">Name</label>
        <input id="input-name" type="text" className="subscribe-input" placeholder="Your name"/>
      </div>

      <div className="input-group half">
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="text" className="subscribe-input" placeholder="your@email.com" />
      </div>
    </div>

    <div className="input-group">
      <label htmlFor="input-comments">Question or Comments</label>
      <textarea name="" id="input-comments"></textarea>
    </div>

    <div className="input-group">
      <button>Submit</button>
    </div>

    <div className="social-group">
      <a className="social-icon linkedin" href="https://www.linkedin.com/in/joshfreemanio/" target="_blank" rel="noopener noreferrer">LinkedIn: (@joshfreemanIO)</a>
      <a className="social-icon instagram" href="https://instagram.com/joshfreemanIO" target="_blank" rel="noopener noreferrer">Instagram: (@joshfreemanIO)</a>
      <a className="social-icon twitter" href="https://twitter.com/joshfreemanIO" target="_blank" rel="noopener noreferrer">Twitter: (@joshfreemanIO)</a>
      <a className="social-icon github" href="https://github.com/joshfreemanIO" target="_blank" rel="noopener noreferrer">Github</a>
    </div>
  </Layout>
)

export default Page
