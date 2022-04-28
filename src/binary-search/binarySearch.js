export function binarySearch (arr, val) {
    let lo = 0
    let high = arr.length - 1
    while (lo <= high) {
        let mid = parseInt((lo + high) / 2)
        if (arr[mid] === val) return mid
        else if (val < arr[mid]) high = mid - 1
        else lo = mid + 1
    }

    return -1
}