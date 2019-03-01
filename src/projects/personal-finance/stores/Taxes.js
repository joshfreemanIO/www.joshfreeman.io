import { types } from 'mobx-state-tree'

const Taxes = types
  .model()
  .views(self => ({
    get taxableIncome() {
      return 100000
    },
    taxForBracket(rate, min, max) {
      if (self.taxableIncome > max) {
        return rate * max
      }

      if (self.taxableIncome > min) {
        return rate * (self.taxableIncome - min)
      }

      return 0
    }
  }))

export default Taxes
