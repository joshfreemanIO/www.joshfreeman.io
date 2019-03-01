import Root from '../Root'
import data from './__data__'

test('Reports render the correct sums', () => {
  const { reports } = Root.create(data)

  expect(reports.income).toBe(5500000)
  expect(reports.expenses).toBe(119000)
  expect(reports.savings).toBe(0)
  expect(reports.taxableIncomeReducingExpenses).toBe(0)
  expect(reports.taxableIncomeReducingSavings).toBe(0)
})
