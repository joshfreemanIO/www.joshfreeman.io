import React from 'react'
import { Link } from 'gatsby'

const PageTemplate = ({ pageContext: { pages } }) => {
  return (
    <>
      <h1>Table of Contents</h1>
      <ul>
        {pages.map(({ title, sectionNumber, path }) => (
          <li><Link to={path}>{sectionNumber} - {title}</Link></li>
        ))}
      </ul>
    </>
  )
}

export default PageTemplate
