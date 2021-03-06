'use strict'

const S = require('../')

describe('array-concat', () => {
  it('merges two arrays', () => {
    expect(S.Array.concat([4, 5, 6], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6])
  })
})

describe('array-copyWithin', () => {
  it('copies an array chunk to a given index', () => {
    expect(S.Array.copyWithin(0, 1, 3, [1, 2, 3])).toEqual([2, 3, 3])
  })
})

describe('array-entries', () => {
  it('creates an iterator from an array', () => {
    expect(typeof S.Array.entries([1, 2, 3])[Symbol.iterator]).toEqual('function')
  })
})

describe('array-every', () => {
  it('check that all elements in an array pass a given condition', () => {
    expect(S.Array.every((elem) => elem > 0, [1, 2, 3])).toEqual(true)
  })
})

describe('array-fill', () => {
  it('fills an array with the provided value', () => {
    expect(S.Array.fill(1, Array(5))).toStrictEqual([1, 1, 1, 1, 1])
  })
})

describe('array-filter', () => {
  it('removes non-truthy elements from an array', () => {
    expect(S.Array.filter((elem) => elem, [1, 0, 0, 1, 1])).toEqual([1, 1, 1])
  })
})

describe('array-find', () => {
  it('finds the first element in an array that matches the given condition', () => {
    expect(S.Array.find((elem) => elem.endsWith('r'), ['foo', 'bar', 'baz'])).toEqual('bar')
  })
})

describe('array-findIndex', () => {
  it('finds the first element in an array that matches the given condition', () => {
    expect(S.Array.findIndex((elem) => elem.endsWith('z'), ['foo', 'bar', 'baz'])).toEqual(2)
  })
})

describe('array-flat', () => {
  const arr = [
    [1],
    [[2]],
    [[[3]]]
  ]

  it('flattens an array with a given depth (1)', () => {
    expect(S.Array.flat(1, arr)).toEqual([1, [2], [[3]]])
  })

  it('flattens an array with a given depth (2)', () => {
    expect(S.Array.flat(2, arr)).toEqual([1, 2, [3]])
  })

  it('flattens an array with a given depth (3)', () => {
    expect(S.Array.flat(3, arr)).toEqual([1, 2, 3])
  })
})

describe('array-flatMap', () => {
  it('correctly maps a function over an array and then flattens the result', () => {
    expect(S.Array.flatMap((elem, i) => [elem, elem + i], [1, 2, 3])).toEqual([1, 1, 2, 3, 3, 5])
  })
})

describe('array-forEach', () => {
  it('executes the provided function for each element in an array', () => {
    let acc = 0
    S.Array.forEach((elem) => acc += elem, [1, 2, 3])
    expect(acc).toEqual(6)
  })
})

describe('array-includes', () => {
  it('returns true if the given value is in an array (1)', () => {
    expect(S.Array.includes('foo', ['foo', 'bar'])).toEqual(true)
  })

  it('returns true if the given value is in an array (2)', () => {
    expect(S.Array.includes('bar', ['foo', 'bar'])).toEqual(true)
  })

  it('returns true if the given value is in an array (3)', () => {
    expect(S.Array.includes('baz', ['foo', 'bar'])).toEqual(false)
  })
})

describe('array-indexOf', () => {
  it('returns the index of an element if found (1)', () => {
    expect(S.Array.indexOf('foo', ['foo', 'bar'])).toEqual(0)
  })

  it('returns the index of an element if found (2)', () => {
    expect(S.Array.indexOf('bar', ['foo', 'bar'])).toEqual(1)
  })

  it('returns -1 if an element is not found', () => {
    expect(S.Array.indexOf('baz', ['foo', 'bar'])).toEqual(-1)
  })
})

describe('array-join', () => {
  it('joins elements in an array with the provided string', () => {
    expect(S.Array.join('-', ['foo', 'bar', 'baz'])).toEqual('foo-bar-baz')
  })
})

describe('array-keys', () => {
  it('returns a new array itterator with the keys from the provided array', () => {
    expect(Array.from(S.Array.keys(['foo', 'bar', 'baz']))).toEqual([0, 1, 2])
  })
})

describe('array-lastIndexOf', () => {
  it('returns the last index of an element if found (1)', () => {
    expect(S.Array.lastIndexOf('foo', ['foo', 'bar', 'foo'])).toEqual(2)
  })

  it('returns the last index of an element if found (2)', () => {
    expect(S.Array.lastIndexOf('bar', ['foo', 'bar', 'foo'])).toEqual(1)
  })

  it('returns -1 if an element is not found', () => {
    expect(S.Array.lastIndexOf('baz', ['foo', 'bar', 'foo'])).toEqual(-1)
  })
})

describe('array-map', () => {
  it('correctly maps a function over an array', () => {
    expect(S.Array.map((elem, i) => elem + i, [1, 2, 3])).toEqual([1, 3, 5])
  })

  it('correctly maps a function over an array (when curried)', () => {
    expect(S.Array.map((elem, i) => elem + i)([1, 2, 3])).toEqual([1, 3, 5])
  })
})

describe('array-pop', () => {
  const arr = [1, 2, 3]

  it('removes the last element from an array (1)', () => {
    expect(S.Array.pop(arr)).toEqual(3)
    expect(arr).toEqual([1, 2])
  })

  it('removes the last element from an array (2)', () => {
    expect(S.Array.pop(arr)).toEqual(2)
    expect(arr).toEqual([1])
  })
})

describe('array-push', () => {
  const arr = [1, 2, 3]

  it('appends an element to an array (1)', () => {
    expect(S.Array.push(1, arr)).toEqual(4)
    expect(arr).toEqual([1, 2, 3, 1])
  })

  it('appends an element to an array (2)', () => {
    expect(S.Array.push.arity(3)(2, 3, arr)).toEqual(6)
    expect(arr).toEqual([1, 2, 3, 1, 2, 3])
  })
})

describe('array-reduce', () => {
  it('correctly reduces an array', () => {
    expect(S.Array.reduce((acc, elem) => acc + elem, 0, [1, 2, 3])).toEqual(6)
  })
})

describe('array-reduceRight', () => {
  it('correctly reduces an array from right to left', () => {
    expect(S.Array.reduceRight((acc, elem) => acc + elem.toString(), '', [1, 2, 3])).toEqual('321')
  })
})

describe('array-reverse', () => {
  it('reverses an array', () => {
    expect(S.Array.reverse([1, 2, 3])).toEqual([3, 2, 1])
  })
})

describe('array-shift', () => {
  const arr = [1, 2, 3]

  it('removes the first element from an array (1)', () => {
    expect(S.Array.shift(arr)).toEqual(1)
    expect(arr).toEqual([2, 3])
  })

  it('removes the first element from an array (2)', () => {
    expect(S.Array.shift(arr)).toEqual(2)
    expect(arr).toEqual([3])
  })
})

describe('array-slice', () => {
  it('shallow copies elements from an array from a start index to an end index (1)', () => {
    expect(S.Array.slice(2, 4, [1, 2, 3, 4, 5, 6])).toEqual([3, 4])
  })

  it('shallow copies elements from an array from a start index to an end index (2)', () => {
    expect(S.Array.slice(5, 7, [1, 2, 3, 4, 5, 6])).toEqual([6])
  })
})

describe('array-some', () => {
  it('check that no elements in an array pass a given condition', () => {
    expect(S.Array.some((elem) => elem > 2, [1, 2, 3])).toEqual(true)
  })
})

describe('array-sort', () => {
  const arr = [5, 2, 9, 4, 0, 6]

  it('returns an array in the correct order as specified a given function (1)', () => {
    expect(S.Array.sort((a, b) => a > b ? 1 : -1, arr)).toEqual([0, 2, 4, 5, 6, 9])
  })

  it('returns an array in the correct order as specified a given function (2)', () => {
    expect(S.Array.sort((a, b) => a < b ? 1 : -1, arr)).toEqual([9, 6, 5, 4, 2, 0])
  })
})

describe('array-splice', () => {
  const arr = [1, 2, 3, 4, 5, 6]

  it('inserts items in an array and returns and emtpy array (1)', () => {
    expect(S.Array.splice(2, 0, 7, arr)).toEqual([])
    expect(arr).toEqual([1, 2, 7, 3, 4, 5, 6])
  })

  it('inserts items in an array and returns and emtpy array (2)', () => {
    expect(S.Array.splice.arity(5)(4, 0, 8, 9, arr)).toEqual([])
    expect(arr).toEqual([1, 2, 7, 3, 8, 9, 4, 5, 6])
  })
})

describe('array-toLocaleString', () => {
  const arr = [1, 'a', new Date('18 May 2017 06:37:25 UTC')]

  it('returns a string created by calling "toLocaleString" on each element in an array (1)', () => {
    expect(S.Array.toLocaleString('en', { timeZone: 'UTC' }, arr)).toEqual('1,a,5/18/2017, 6:37:25 AM')
  })

  it('returns a string created by calling "toLocaleString" on each element in an array (2)', () => {
    expect(S.Array.toLocaleString('en', { timeZone: 'Europe/Paris' }, arr)).toEqual('1,a,5/18/2017, 8:37:25 AM')
  })
})

describe('array-toString', () => {
  it('returns a string created by calling "toString" on each element in an array', () => {
    expect(S.Array.toString([1, 'a', 2, 'b'])).toEqual('1,a,2,b')
  })
})

describe('array-unshift', () => {
  const arr = [1, 2, 3]

  it('prepends an element to an array (1)', () => {
    expect(S.Array.unshift(1, arr)).toEqual(4)
    expect(arr).toEqual([1, 1, 2, 3])
  })

  it('prepends an element to an array (2)', () => {
    expect(S.Array.unshift.arity(3)(2, 3, arr)).toEqual(6)
    expect(arr).toEqual([2, 3, 1, 1, 2, 3])
  })
})

describe('array-values', () => {
  it('returns an iterator object containing the values from an array', () => {
    expect(Array.from(S.Array.values(['foo', 'bar']))).toEqual(['foo', 'bar'])
  })
})
