import { types, getSnapshot, applySnapshot } from 'mobx-state-tree'

const Item = types
  .model({
    name: '',
    value: 0,
    frequency: '',
    category: '',
    taxableIncomeReducing: false
  })
  .actions(self => ({
    set(name, value) {
      console.log(name, value)
      self[name] = value
    },
    updateValue(event) {
      const value = Number.parseInt(event.target.value)

      if (Number.isNaN(value)) {
        self.value = 0
      } else {
        self.value = value
      }
    }
  }))
  .views(self => ({
  }))

const Editable = types
  .model()
  .volatile(self => ({
    isEditing: false,
    previousSnapshot: {}
  }))
  .actions(self => ({
    cancel() {
      applySnapshot(self, self.previousSnapshot)
      self.isEditing = false
    },
    save() {
      self.previousSnapshot = {}
      self.isEditing = false
    },
    edit() {
      self.previousSnapshot = getSnapshot(self)
      self.isEditing = true
    },
    update(event) {
      self.set(event.target.name, event.target.value)
    }
  }))

export default types.compose(Item, Editable).named('Item')
