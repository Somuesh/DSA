// Write a recursive function to calculate the sum of all elements in an array.

let arr = [12,87,];
// let sum = 0;

let arrSum = (arr, length) => {
    if(length <= 0){
        return 1;
    }
    return (arrSum(arr, length-1) + arr[length])
}

console.log(arrSum(arr, arr.length-1))