import React from 'react'
import { inject } from 'mobx-react'

class AppLoaded extends React.Component {
  componentDidMount() {
    const { store } = this.props
    store.UIStore.ContentStatus.activateWhenReady()
  }

  render() {
    return null
  }
}

export default inject('store')(AppLoaded)
