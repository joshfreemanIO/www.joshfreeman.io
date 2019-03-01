import React from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import HamburgerSVG from './icons/hamburger.svg'
import XSVG from './icons/x.svg'

const SideMenuToggle = styled.button`
  border: none;
  height: 101px;
  outline: none;
  position: absolute;
  right: 15px;
  top: 0;
  width: 30px;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 1s;

  @media screen and (min-width: 769px) {
    display: none;
  }

  .menu-icon {
    background-image: url(${HamburgerSVG});
    opacity: 1;
  }

  .close-icon {
    background-image: url(${XSVG});
    opacity: 0;
  }

  &.active {
    .menu-icon {
      opacity: 0;
    }
    .close-icon {
      opacity: 1;
    }
  }
`

const MenuIcon = styled.span`
  display: flex;
  flex-grow: 1;
  background-position: 0 50%;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  transition: 0.1s ease;
  position: absolute;
  top: 4px;
  left: 0;
`

const Button = ({ store }) => (
  <SideMenuToggle
    className={store.UIStore.Navigation.isOpen ? 'active' : ''}
    onClick={store.UIStore.Navigation.toggle}
  >
    <MenuIcon className="menu-icon" />
    <MenuIcon className="close-icon" />
  </SideMenuToggle>
)

export default inject('store')(observer(Button))
