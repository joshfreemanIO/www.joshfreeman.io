import React from 'react'
import Helmet from 'react-helmet'
import Favicons from './Favicons'

const Head = ({data}) => (
  <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <meta name={''} content={''} />
    <html lang="en" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700" rel="stylesheet" type="text/css" />
    <Favicons />
  </Helmet>
)

export default Head
