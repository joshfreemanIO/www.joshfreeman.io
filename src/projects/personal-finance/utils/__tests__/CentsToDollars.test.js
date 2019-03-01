import CentsToDollars from '../CentsToDollars'

test('conversion of cents to dollars', () => {
  expect(CentsToDollars(12345)).toBe('$123.45')
})
