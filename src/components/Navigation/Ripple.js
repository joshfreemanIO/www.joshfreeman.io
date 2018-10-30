import React from 'react'
import styled, {keyframes} from 'styled-components'


const blink = keyframes`
  50% {
    opacity: 0.0;
  }
`

const Dot = styled.div`
  animation: ${blink} 1.5s step-start 0s infinite;
  animation-fill-mode: forwards;
  background: red;
  height: 100%;
  width: 100%;
  position: absolute;
  animation-delay: ${props => props.delay}s;
`

const Wrapper = styled.div`
  height: 30px;
  right: -20px;
  position: absolute;
  width: 15px;
`

const Ripple = () => (
  <Wrapper>
    {/* <Dot delay={0.5} /> */}
  </Wrapper>
)

export default Ripple
