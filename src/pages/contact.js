import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import MusicalLinkAway from '../components/MusicalLinkAway'
import SocialIcon from '../components/SocialIcon'
import styled from 'styled-components'

const SocialGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .social-icon {
    margin: 0 $scale6;
  }
`

const Page = () => (
  <Layout>
    <Helmet>
      <title>Contact Josh Freeman</title>
    </Helmet>

    <h1>Let's talk</h1>

    <p>If you'd like to ask a direct question, please use the contact form below. If you're hip to social media, then check out the icons below.</p>

    <ContactForm />

    <SocialGroup>
      <SocialIcon platform="linkedin" href="https://www.linkedin.com/in/joshfreemanio/">LinkedIn: (@joshfreemanIO)</SocialIcon>
      <SocialIcon platform="instagram" href="https://instagram.com/joshfreemanIO">Instagram: (@joshfreemanIO)</SocialIcon>
      <SocialIcon platform="twitter" href="https://twitter.com/joshfreemanIO">Twitter: (@joshfreemanIO)</SocialIcon>
      <MusicalLinkAway className="social-icon github" href="https://github.com/joshfreemanIO">Github</MusicalLinkAway>
    </SocialGroup>

  </Layout>
)

export default Page
