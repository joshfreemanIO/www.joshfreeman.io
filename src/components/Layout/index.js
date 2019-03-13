import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Provider } from 'mobx-react'
import styled, { ThemeProvider } from 'styled-components'
import Head from './Head'
import Navigation from '../Navigation'
import NavigationButton from '../Navigation/Button'
import store from '../../stores'
import theme from '../../theme'

import './stylesheets/app.scss'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  height: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
      <div>
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
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
