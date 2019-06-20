import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import LoadingIcon from '../../LoadingIcon'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
  ${({ visible }) => visible && `
    visibility: visible;
    opacity: 1;
  `}
`

const MainWrapper = ({ children, store }) => (
  <>
    <Wrapper visible={store.UIStore.MainWrapper.visible}>
      {children}
    </Wrapper>
    <LoadingIcon />
  </>
)

export default inject('store')(observer(MainWrapper))
