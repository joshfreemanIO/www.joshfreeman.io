import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

const StyledIcon = styled.div`
  display: inline-block;
  position: fixed;
  left: calc(50% - 32px);
  top: calc(50% - 32px);
  width: 64px;
  height: 64px;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.1s linear;

  ${({ visible }) => visible && `
    visibility: visible;
    opacity: 1;
  `}

  div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: black;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  div:nth-child(1) {
    left: 6px;
    animation-delay: -0.24s;
  }

  div:nth-child(2) {
    left: 26px;
    animation-delay: -0.12s;
  }

  div:nth-child(3) {
    left: 45px;
    animation-delay: 0;
  }

  @keyframes lds-facebook {
    0% {
      top: 6px;
      height: 51px;
    }
    50%, 100% {
      top: 19px;
      height: 26px;
    }
  }
`

const LoadingIcon = ({ store, ...props }) => (
  <StyledIcon visible={store.UIStore.LoadingIcon.visible} {...props}><div /><div /><div /></StyledIcon>
)

export default inject('store')(observer(LoadingIcon))
