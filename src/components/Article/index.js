import React from 'react'

const Article = ({title, date, html}) => {
  return (
    <article className="blog-post-container">
      <header className="article-header">
        <h1>{title}</h1>
        <time itemProp="datePublished" dateTime={date}>{date}</time>
      </header>

      <div dangerouslySetInnerHTML={{__html: html}} />
    </article>
  )
}

export default Article
