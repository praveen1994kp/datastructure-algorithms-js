const {binarySearch} = require('./binarySearch')

describe('Binary Search', () => {
    it('Search for existing element in array', () => {
        const arr = [56, 77, 11, 23, 916]

        const expected = 3

        const got = binarySearch(arr, 23)

        expect(got).toEqual(expected)
    })
    it('Search for non-existent element in array', () => {
        const arr = [56, 77, 11, 23, 916]

        const expected = -1

        const got = binarySearch(arr, 24)

        expect(got).toEqual(expected)
    })
})