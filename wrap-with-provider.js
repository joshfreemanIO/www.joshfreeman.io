import React from 'react'
import { Provider } from 'mobx-react'
import createStore from './src/stores'

export default ({ element }) => <Provider store={createStore()}>{element}</Provider>
