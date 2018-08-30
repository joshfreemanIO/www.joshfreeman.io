import {types, getRoot} from 'mobx-state-tree'
import Item from '../models/Item'

const Reports = types
  .model()
  .views(self => ({
    get income() {
      return getRoot(self).income
    },
    get expenses() {
      return getRoot(self).expenses
    },
    get savings() {
      return getRoot(self).savings
    },
    get taxableIncomeReducingExpenses() {
      return self
        .expenses
        .filter(item => item.taxableIncomeReducing)
    },
    get taxableIncomeReducingSavings() {
      return self
        .savings
        .filter(item => item.taxableIncomeReducing)
    },
    get AdjustedGrossIncome() {
      return total(self.income)
        - total(self.taxableIncomeReducingExpenses)
        // - self.taxableIncomeReducingSavings
    }
  }))

const total = (items) => {
  return items.reduce((total, item) => total + item.value, 0)
}

export default Reports
