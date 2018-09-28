import {types, getRoot} from 'mobx-state-tree'
import Item from '../models/Item'

const Reports = types
  .model()
  .views(self => ({
    get income() {
      return total(getRoot(self).income)
    },
    get expenses() {
      return total(getRoot(self).expenses)
    },
    get savings() {
      return total(getRoot(self).savings)
    },
    get taxableIncomeReducingExpenses() {
      const expenses = getRoot(self)
        .expenses
        .filter(item => item.taxableIncomeReducing)

      return total(expenses)
    },
    get taxableIncomeReducingSavings() {
      const savings = getRoot(self)
        .savings
        .filter(item => item.taxableIncomeReducing)

      return total(savings)
    },
    get AdjustedGrossIncome() {
      return self.income
        - self.taxableIncomeReducingExpenses
        - self.taxableIncomeReducingSavings
    }
  }))

const total = (items) => {
  return items.reduce((total, item) => total + item.value, 0)
}

export default Reports
