import React from 'react'
import Helmet from 'react-helmet'

const OpenGraph = ({
  title = '', description = '', ogImage = { publicURL: '' }, ogImageAlt = '', path
}) => {
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://www.joshfreeman.io/${ogImage.publicURL}`} />
      <meta property="og:image:secure_url" content={`https://www.joshfreeman.io/${ogImage.publicURL}`} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content="A shiny red apple with a bite taken out" />

      <meta property="og:url" content={`https://www.joshfreeman.io/${path}`} />
      <meta property="og:site_name" content="The Personal Site for Josh Freeman" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <meta name="twitter:image" content={ogImage.publicURL} />
      <meta name="twitter:site" content="@joshfreemanIO" />
    </Helmet>
  )
}


export default OpenGraph
