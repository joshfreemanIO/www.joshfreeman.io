import React, { Fragment } from 'react'
import MeyerReset from './meyer-reset'
import SiteReset from './site-reset'
import GlobalStyle from './global-style'

const Style = () => (
  <Fragment>
    <MeyerReset />
    <SiteReset />
    <GlobalStyle />
  </Fragment>
)

export default Style
