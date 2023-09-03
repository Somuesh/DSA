let arr = [2, 4, 5, 6, 8, 10, 12, 19]
let target = 12
let start = 0
let end = arr.length - 1

let bsearch = (arr, target, start, end) => {
    if (start > end) {
        return "Not found";
    }
    let mid = Math.floor(start + (end - start) / 2);
    // console.log(mid)
    if (arr[mid] == target) {
        return mid
    }

    if (arr[mid] > target) {
        return bsearch(arr, target, start, mid - 1)
    }
    
    return bsearch(arr, target, mid + 1, end)
}

console.log(bsearch(arr, target, start, end))