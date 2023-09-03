// Write a recursive function to calculate the sum of all elements in an array.

let arr = [12,87,13];

// let sum = 0
let arrSum = (arr, length) => {
    if(length == arr.length) return 0;
    return arr[length] + arrSum(arr,length+1)
}

console.log(arrSum(arr, 0))