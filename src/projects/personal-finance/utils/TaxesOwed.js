const TaxesOwed = (Brackets, taxableIncome) => {
  const brackets = Brackets
    .sort((left, right) => right[0] > left[0])
    .filter((bracket) => {
      return taxableIncome > bracket[1]
    })

  return brackets.reduce((accumulator, [rate, max]) => {
    const taxableAtThisRate = accumulator[1] - max
    const totalTax = accumulator[0] + taxableAtThisRate * rate

    return [totalTax, max]
  }, [0, taxableIncome])[0]
}

export const SingleBrackets = [
  [.10, 0],
  [.12, 9525],
  [.22, 38700],
  [.24, 82500],
  [.32, 157500],
  [.35, 200000],
  [.37, 500000],
]

export default TaxesOwed
