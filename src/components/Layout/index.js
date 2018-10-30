import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Head from './Head'
import Navigation from '../Navigation'
import NavigationButton from '../Navigation/Button'
import { Provider } from 'mobx-react'
import store from '../../stores'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../theme'

import './stylesheets/app.scss'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow: scroll;
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

const Layout = ({ children, data }) => (
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

        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <MainWrapper>
              <Navigation />
              <NavigationButton />

              <ContentWrapper>
                {children}
              </ContentWrapper>
            </MainWrapper>
          </ThemeProvider>
        </Provider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
