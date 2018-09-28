import TaxesOwed from '../TaxesOwed'
import { SingleBrackets } from '../TaxesOwed'

test('Taxes owed calculates correctly', () => {
  expect(TaxesOwed(SingleBrackets, 9525)).toBe(952.50)
  expect(TaxesOwed(SingleBrackets, 38700)).toBe(4453.50)
  expect(TaxesOwed(SingleBrackets, 82500)).toBe(14089.50)
  expect(TaxesOwed(SingleBrackets, 157500)).toBe(32089.50)
  expect(TaxesOwed(SingleBrackets, 200000)).toBe(45689.50)
  expect(TaxesOwed(SingleBrackets, 500000)).toBe(150689.50)

  expect(TaxesOwed(SingleBrackets, 500)).toBe(50)
  expect(TaxesOwed(SingleBrackets, 35000)).toBe(4009.5)
  expect(TaxesOwed(SingleBrackets, 75000)).toBe(12439.5)
  expect(TaxesOwed(SingleBrackets, 100000)).toBe(18289.5)
  expect(TaxesOwed(SingleBrackets, 175000)).toBe(37689.5)
  expect(TaxesOwed(SingleBrackets, 250000)).toBe(63189.5)
  expect(TaxesOwed(SingleBrackets, 1000000)).toBe(335689.5)
})
