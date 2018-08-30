import React from 'react'
import { Provider } from 'mobx-react'
import store from './stores'
import Scene from './scene'
import './theme/app.scss'

const PersonalFinance = () => (
  <Provider store={store}>
    <main className="scene">
      <h1>Personal Finance</h1>

      <Scene />
    </main>
  </Provider>
)

export default PersonalFinance
