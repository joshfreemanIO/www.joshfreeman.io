import { types, getRoot } from 'mobx-state-tree'

const UIStore = types
  .model({
    internallyVisible: false
  })
  .actions(self => ({
    afterCreate() {
      setTimeout(self.enable, 250)
    },
    enable() {
      self.internallyVisible = true
    }
  }))
  .views(self => ({
    get visible() {
      if (self.globalContentLoaded) {
        return false
      }

      return self.internallyVisible
    },
    get globalContentLoaded() {
      return getRoot(self).UIStore.ContentStatus.contentLoaded
    },
  }))

export default UIStore
