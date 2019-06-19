import DollarsToCents from '../DollarsToCents'

test('conversion of cents to dollars', () => {
  expect(DollarsToCents('$123.45')).toBe(12345)
})
