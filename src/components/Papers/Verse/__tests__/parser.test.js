import parseReferences, { parseSingleReference, parseRangeReference } from '../parser'

test('parse a single reference', () => {
  const reference = '12:11'
  const result = parseSingleReference(reference)

  expect(result).toEqual({
    chapter: '12',
    verse: '11'
  })
})

test('parse a range reference for the same chapter', () => {
  const reference = '12:11-15'

  const result = parseRangeReference(reference)

  expect(result).toEqual({
    start: {
      chapter: '12',
      verse: '11'
    },
    end: {
      chapter: '12',
      verse: '15'
    }
  })
})


test('parse a range reference for the difference chapters', () => {
  const reference = '12:11-15:15'

  const result = parseRangeReference(reference)

  expect(result).toEqual({
    start: {
      chapter: '12',
      verse: '11'
    },
    end: {
      chapter: '15',
      verse: '15'
    }
  })
})

test('fully parse a single reference', () => {
  const reference = '12:11'

  const expectedResult = [{
    chapter: '12',
    verse: '11'
  }]

  expect(parseReferences(reference)).toEqual(expectedResult)
})

test('fully parse a range reference', () => {
  const reference = '12:11-15'

  const expectedResult = [{
    start: {
      chapter: '12',
      verse: '11'
    },
    end: {
      chapter: '12',
      verse: '15'
    }
  }]

  expect(parseReferences(reference)).toEqual(expectedResult)
})

test('fully parse a combined reference', () => {
  const reference = '12:11,13'

  const expectedResult = [
    {
      chapter: '12',
      verse: '11'
    },
    {
      chapter: '12',
      verse: '13'
    }
  ]

  expect(parseReferences(reference)).toEqual(expectedResult)
})

test('fully parse a combined reference', () => {
  const reference = '12:11-13,15'

  const expectedResult = [
    {
      start: {
        chapter: '12',
        verse: '11'
      },
      end: {
        chapter: '12',
        verse: '13'
      }
    },
    {
      chapter: '12',
      verse: '15'
    }
  ]

  expect(parseReferences(reference)).toEqual(expectedResult)
})

test('fully parse a combined split reference', () => {
  const reference = '12:11-15:13,15'

  const expectedResult = [
    {
      start: {
        chapter: '12',
        verse: '11'
      },
      end: {
        chapter: '15',
        verse: '13'
      }
    },
    {
      chapter: '15',
      verse: '15'
    }
  ]

  expect(parseReferences(reference)).toEqual(expectedResult)
})
