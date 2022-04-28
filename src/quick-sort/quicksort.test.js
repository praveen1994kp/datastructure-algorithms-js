const {quickSort} = require('./quickSort')

describe.only('Quick Sort', () => {
    it('sort n numbers', () => {
        const unsorted = [-1, -5, 99, 1, 200, 0, 0]
        const sortedExpected = [-5, -1, 0, 0, 1, 99, 200]

        const sortedGot = quickSort(unsorted)
        expect(sortedGot).toEqual(sortedExpected)
    })
})