import React from 'react'
import { Link } from 'gatsby'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import Subscribe from './Subscribe'

const Title = styled(Link)`
  background-size: contain;
  color: ${props => props.theme.colors.gray};
  flex-shrink: 0;
  flex-grow: 0;
  font-weight: bold;
  display: flex;
  letter-spacing: -2px;
  font-size: 45px;
  line-height: 61px;
  margin-bottom: 60px;
  margin-left: 5px;
  text-align: left;
  text-decoration: none;
  width: 100%;

  @media screen and (max-width: 768px) {
    height: 64px;
    line-height: 64px;
  }

  @media screen and (max-width: 424px) {
    font-size: 40px;
    height: 64px;
    line-height: 64px;
  }

  @media screen and (max-width: 360px) {
    font-size: 32px;
    height: 64px;
    line-height: 68px;
  }
`

const SiteNavigation = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px 24px;
  width: 360px;
  overflow: scroll;
  flex-shrink: 0;
  font-size: ${props => props.theme.scales.scale7};
  line-height: ${props => props.theme.scales.scale7};
  text-transform: lowercase;
  color: black;

  @media screen and (max-width: 768px) {
    width: 100%;
    box-shadow: 0px 2px 10px 1px rgb(200, 200, 200);
    transition: 0.15s ease-in-out;
    flex-basis: 101px;
    padding: 18px 24px;

    &.active {
      flex-basis: 100%;
      overflow: auto;
      transition: 0.15s ease-in;
    }
  }
`

const NavigationLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  flex-grow: 1;
  text-align: right;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

const NavGroup = styled.div`
  margin-bottom: 30px;
  display: flex;
  position: relative;
  justify-content: flex-end;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.gray};
  text-decoration: none;
`

const Dot = styled.span`
  color: red;
`

const Navigation = ({ store }) => {
  return (
    <SiteNavigation className={store.UIStore.Navigation.isOpen ? 'active' : ''}>
      <Title to="/">
        joshfreeman
        <Dot>.</Dot>
        io
      </Title>

      <NavigationLinks>
        <NavGroup className="nav-group">
          <NavLink to="/papers" onClick={store.UIStore.Navigation.dismiss}>Papers</NavLink>
        </NavGroup>

        <NavGroup className="nav-group">
          <NavLink to="/about" onClick={store.UIStore.Navigation.dismiss}>About</NavLink>
        </NavGroup>

        <NavGroup className="nav-group">
          <NavLink to="/contact" onClick={store.UIStore.Navigation.dismiss}>Contact</NavLink>
        </NavGroup>
      </NavigationLinks>

      <Subscribe />

    </SiteNavigation>
  )
}

export default inject('store')(observer(Navigation))
