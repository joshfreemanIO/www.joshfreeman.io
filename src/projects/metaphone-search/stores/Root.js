import { types, getRoot } from 'mobx-state-tree'
import metaphone from 'metaphone'
import Application from '../models/Application'
import Search from './Search'

const Root = types
  .model({
    applications: types.optional(types.array(Application), []),
    search: types.optional(Search, {})
  })
  .views(self => ({
    get filteredApplications() {
      const { searchTerm } = getRoot(self).search
      const metaphoneTerm = metaphone(searchTerm)

      if (metaphoneTerm === '') {
        return []
      }

      return self
        .applications
        .filter(application => application.metaphone.includes(metaphoneTerm))
    }
  }))


export default Root
