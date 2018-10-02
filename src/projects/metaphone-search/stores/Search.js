import { types } from 'mobx-state-tree'

const Search = types
  .model('Search', {
    searchTerm: ''
  })
  .actions(self => ({
    updateSearchTerm(term) {
      self.searchTerm = term
    }
  }))
  .views(self => ({
    get isEmpty() {
      return self.searchTerm === ''
    }
  }))

export default Search
