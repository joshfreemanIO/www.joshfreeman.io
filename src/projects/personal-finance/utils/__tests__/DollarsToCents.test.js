import DollarsToCents from '../DollarsToCents'

test("conversion of cents to dollars", () => {
  console.log('$123.45'.replace(/^\$/, ''))
  expect(DollarsToCents('$123.45')).toBe(12345)
})
