import { types, getRoot } from 'mobx-state-tree'

const total = items => {
  return items.reduce((sum, item) => sum + item.value, 0)
}

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


export default Reports
