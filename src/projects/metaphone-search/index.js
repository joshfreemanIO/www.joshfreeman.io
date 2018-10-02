import React from 'react'
import { Provider } from 'mobx-react'
import store from './stores'
import Scene from './scene'
import './theme/app.scss'

const PersonalFinance = () => (
  <Provider store={store}>
    <Scene />
  </Provider>
)

export default PersonalFinance
