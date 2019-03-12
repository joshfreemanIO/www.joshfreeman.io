import React from 'react'
import Helmet from 'react-helmet'
import moment from 'moment'

const OpenGraph = ({
  title = '', description = '', ogImage = { publicURL: '' }, ogImageAlt = '', path = '', tags = [], date
}) => {
  return (
    <Helmet>
      <meta property="article:published_time" content={moment(date).format('YYYY-MM-DD')} />
      <meta property="article:author" content="https://www.joshfreeman.io/about" />
      <meta property="article:section" content="Software Development" />
      <meta property="article:tag" content={tags.join(',')} />
      <meta property="article:publisher" content="https://www.joshfreeman.io" />

      <meta property="og:description" content={description} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:secure_url" content={`https://www.joshfreeman.io${ogImage.publicURL}`} />
      <meta property="og:image" content={`https://www.joshfreeman.io${ogImage.publicURL}`} />
      <meta property="og:site_name" content="joshfreeman.io" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://www.joshfreeman.io${path}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@joshfreemanIO" />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <meta name="twitter:image:src" content={ogImage.publicURL} />
      <meta name="twitter:image" content={ogImage.publicURL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@joshfreemanIO" />

      <meta name="description" content={description} />
      <meta name="title" content={title} />
      <meta property="author" content="Josh Freeman" />
      <link rel="author" href="https://www.joshfreeman.com/about" />
    </Helmet>
  )
}


export default OpenGraph
