import React from 'react'
import styled from 'styled-components'

const Article = styled.article`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  font-family: 'Montserrat', "Open Sans", "Helvetica Neue", Arial, sans-serif;
`

const ArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-top: 121px;

  @import url('https://fonts.googleapis.com/css?family=Raleway');
  font-family: 'Raleway', "Open Sans", "Helvetica Neue", Arial, sans-serif;

  h1 {
    margin-bottom: 8px;;
    text-align: right;
    font-size: 45px;
    position: relative;

    font-weight: bold;
  }

  margin-bottom: 24px;
`

const Component = ({ title, date, html }) => {
  return (
    <Article>
      <ArticleHeader>
        <h1>{title}</h1>
        <time itemProp="datePublished" dateTime={date}>{date}</time>
      </ArticleHeader>

      <div>
        {html}
      </div>
    </Article>
  )
}

export default Component
