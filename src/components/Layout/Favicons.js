import React from 'react'
import { withPrefix } from 'gatsby-link'

const Favicons = ({data}) => (
  <React.Fragment>
    <link rel="apple-touch-icon" sizes="180x180" href={ withPrefix("/favicon/apple-touch-icon.png")} />
    <link rel="icon" type="image/png" sizes="32x32" href={ withPrefix("/favicon/favicon-32x32.png")} />
    <link rel="icon" type="image/png" sizes="16x16" href={ withPrefix("/favicon/favicon-16x16.png")} />
    <link rel="manifest" href={ withPrefix("/favicon/site.webmanifest")} />
    <link rel="mask-icon" href={ withPrefix("/favicon/safari-pinned-tab.svg")} color="#ffffff" />
    <link rel="shortcut icon" href={ withPrefix("/favicon/favicon.ico")} />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-config" content={withPrefix("/favicon/browserconfig.xml")} />
    <meta name="theme-color" content="#ffffff" />
  </React.Fragment>
)

export default Favicons
