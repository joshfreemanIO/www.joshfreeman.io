import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '@components/Layout'
import PageHeader from '@components/PageHeader'
import ContactForm from './ContactForm'
import MusicalLinkAway from './MusicalLinkAway'
import SocialIcon from './SocialIcon'

const SocialGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
  flex-grow: 1;

  .social-icon {
    align-self: flex-end;
    margin: 0 $scale6;
  }
`

const Page = () => (
  <Layout>
    <Helmet>
      <title>Contact Josh Freeman</title>
    </Helmet>

    <PageHeader>Let&apos;s talk</PageHeader>

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
