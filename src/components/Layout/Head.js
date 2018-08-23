import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'


const Head = ({data}) => (
  <Helmet>
    <title>{data.site.siteMetadata.title}</title>
    <meta name={''} content={''} />
    <html lang="en" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700" rel="stylesheet" type="text/css" />

    {/* Favicons */}
    <link rel="apple-touch-icon" sizes="180x180" href={ withPrefix("/favicon/apple-touch-icon.png")} />
    <link rel="icon" type="image/png" sizes="32x32" href={ withPrefix("/favicon/favicon-32x32.png")} />
    <link rel="icon" type="image/png" sizes="16x16" href={ withPrefix("/favicon/favicon-16x16.png")} />
    <link rel="manifest" href={ withPrefix("/favicon/site.webmanifest")} />
    <link rel="mask-icon" href={ withPrefix("/favicon/safari-pinned-tab.svg")} color="#ffffff" />
    <link rel="shortcut icon" href={ withPrefix("/favicon/favicon.ico")} />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-config" content={withPrefix("/favicon/browserconfig.xml")} />
    <meta name="theme-color" content="#ffffff" />

  </Helmet>
)

export default Head
