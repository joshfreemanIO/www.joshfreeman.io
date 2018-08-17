import { types } from 'mobx-state-tree'
import Navigation from './../components/Navigation/UIModel'

const UIStore = types
  .model({
    Navigation: types.optional(Navigation, {})
  })

export default UIStore
