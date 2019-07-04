import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TitlePart = styled.span`
  font-size: 32px;
`

const SubTitle = styled.span`
  font-size: 24px;
`

const Divider = styled.span`
  width: 25%;
  height: 2px;
  background-color: grey;
  display: inline-block;
`

const Home = () => (
  <Center>
    <Title>
      <TitlePart>Saul of Tarsus</TitlePart>

      <Divider />

      <SubTitle>The Leaven We Were Warned About</SubTitle>

    </Title>

    <Link to="/papers/saul-of-tarsus/table-of-contents">Table of Contents</Link>
  </Center>
)

export default Home
