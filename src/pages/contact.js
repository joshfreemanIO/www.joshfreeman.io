import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import MusicalLinkAway from '../components/MusicalLinkAway'

const Page = () => (
  <Layout>
    <Helmet>
      <title>Contact Josh Freeman</title>
    </Helmet>

    <h1>Keep Conversation Alive</h1>

    <p>I'm glad you'd like to get in touch with me!</p>

    <p>If you'd like to ask a direct question, please use the contact form below. If you're hip to social media, then check out the icons below.</p>

    <ContactForm />

    <div className="social-group">
      <a className="social-icon linkedin" href="https://www.linkedin.com/in/joshfreemanio/" target="_blank" rel="noopener noreferrer">LinkedIn: (@joshfreemanIO)</a>
      <a className="social-icon instagram" href="https://instagram.com/joshfreemanIO" target="_blank" rel="noopener noreferrer">Instagram: (@joshfreemanIO)</a>
      <a className="social-icon twitter" href="https://twitter.com/joshfreemanIO" target="_blank" rel="noopener noreferrer">Twitter: (@joshfreemanIO)</a>
      <MusicalLinkAway className="social-icon github" href="https://github.com/joshfreemanIO" target="_blank" rel="noopener noreferrer">Github</MusicalLinkAway>
    </div>

  </Layout>
)

export default Page
