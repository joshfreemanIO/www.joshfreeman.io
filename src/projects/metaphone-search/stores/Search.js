import { types } from 'mobx-state-tree'

const Search = types
  .model('Search', {
    searchTerm: ''
  })
  .actions(self => ({
    updateSearchTerm(term) {
      self.searchTerm = term // eslint-disable-line no-param-reassign
    }
  }))
  .views(self => ({
    get isEmpty() {
      return self.searchTerm === ''
    }
  }))

export default Search
