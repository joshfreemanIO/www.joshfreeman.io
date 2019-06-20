import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import Navigation from '@components/Navigation'
import NavigationButton from '@components/Navigation/Button'
import MainWrapper from './MainWrapper'
import Head from './Head'
import theme from '../../theme'
import Style from './styles/css'
import AppLoaded from '../AppLoaded'


const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: scroll-y;
  padding: 30px 150px;

  @media screen and (max-width: 1080px) {
    padding: 30px 90px;
  }

  @media screen and (max-width: 960px) {
    padding: 30px 60px;
  }

  @media screen and (max-width: 720px) {
    padding: 24px;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Head data={data} />
        <ThemeProvider theme={theme}>
          <MainWrapper>
            <Style />
            <Navigation />
            <NavigationButton />

            <ContentWrapper>
              {children}
            </ContentWrapper>
          </MainWrapper>
        </ThemeProvider>
        <AppLoaded />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
