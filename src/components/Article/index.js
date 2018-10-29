import React from 'react'
import styled from 'styled-components'

const ArticleHeader = styled.header`
  h1 {
    margin-bottom: 0;
  }

  margin-bottom: 24px;
`

const Article = ({title, date, html}) => {
  return (
    <article className="blog-post-container">
      <ArticleHeader>
        <h1>{title}</h1>
        <time itemProp="datePublished" dateTime={date}>{date}</time>
      </ArticleHeader>

      <div dangerouslySetInnerHTML={{__html: html}} />
    </article>
  )
}

export default Article
