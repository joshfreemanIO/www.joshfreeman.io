import { types } from 'mobx-state-tree'

const UIStore = types
  .model({
    isOpen: false
  })
  .actions(self => ({
    toggle() {
      self.isOpen = !self.isOpen
    },
    dismiss() {
      self.isOpen = false
    }
  }))

export default UIStore
