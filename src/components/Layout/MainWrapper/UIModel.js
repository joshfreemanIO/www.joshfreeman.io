import { types, getRoot } from 'mobx-state-tree'

const UIStore = types
  .model({})
  .views(self => ({
    get visible() {
      return getRoot(self).UIStore.ContentStatus.contentLoaded
    }
  }))

export default UIStore
