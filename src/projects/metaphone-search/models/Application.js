import { types } from 'mobx-state-tree'
import metaphone from 'metaphone'

const Application = types
  .model({
    department: '',
    name: ''
  })
  .views(self => ({
    get metaphone() {
      return metaphone(`${self.department} - ${self.name}`)
    }
  }))


export default Application
