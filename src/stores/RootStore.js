import { types } from 'mobx-state-tree'
import UIStore from './UIStore'

const RootStore = types
  .model({
    UIStore: types.optional(UIStore, {})
  })

export default RootStore
