import { types } from 'mobx-state-tree'
import Item from '../models/Item'
import Reports from './Reports'

const Root = types
  .model({
    income: types.optional(types.array(Item), []),
    expenses: types.optional(types.array(Item), []),
    reports: types.optional(Reports, {})
  })

export default Root
