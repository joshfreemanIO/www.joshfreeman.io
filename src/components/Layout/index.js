import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Head from './Head'
import Navigation from '../Navigation'
import NavigationButton from '../Navigation/Button'
import { Provider } from 'mobx-react'
import store from '../../stores'

import '../../theme/stylesheets/app.scss'

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
          <div className="main-wrapper" >
            <Navigation />
            <NavigationButton />

            <div className="content-wrapper">
              {children}
            </div>
          </div>
        </Provider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
