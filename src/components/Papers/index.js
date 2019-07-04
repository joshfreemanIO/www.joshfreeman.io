import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-left: 4px solid #333;
  padding: 0 12px;
  margin-bottom: 36px;
`

const Text = styled.p`
  margin-bottom: 12px;
`

const Citation = styled.p`
  text-align: right;
  color: #333333;
  margin: 0;
`

const Verse = ({ children, book, verse, version }) => (
  <Wrapper>
    <Text>
      {children}
    </Text>
    <Citation>
      <span>{book}</span>
      &nbsp;
      <span>{verse}</span>
      &nbsp;
      <span>{version}</span>
    </Citation>
  </Wrapper>
)

export default Verse
