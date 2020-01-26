export const parseSingleReference = reference => {
  if (reference.includes(':')) {
    const [chapter, verse] = reference.split(':')

    return {
      chapter,
      verse
    }
  }

  return {
    chapter: undefined,
    verse: reference
  }
}

export const parseRangeReference = reference => {
  const [start, end] = reference
    .split('-')
    .map(subReference => {
      return parseSingleReference(subReference)
    })

  if (end.chapter === undefined) {
    end.chapter = start.chapter
  }

  return {
    start,
    end
  }
}

const parseReferences = references => {
  return references
    .split(',')
    .map(reference => {
      if (reference.includes('-')) {
        return parseRangeReference(reference)
      }

      return parseSingleReference(reference)
    })
    .reduce((result, reference, index, referencesList) => {
      if (reference.chapter === undefined && reference.end === undefined) {
        /* eslint-disable-next-line no-param-reassign */
        reference.chapter = referencesList[index - 1].chapter || referencesList[index - 1].end.chapter
      }

      return result.concat([reference])
    }, [])
}

export default parseReferences
