// Write a recursive function to calculate the sum of all elements in an array.

let arr = [2,4,6,8,10,12,17];
let target = 10;

// let sum = 0
let arrSum = (arr,len, target) => {
    if(len == arr.length) return -1;
    
    if(target == arr[len]){
        return len+1
    }
    
    
    return arrSum(arr, len+1, target)
}

console.log(arrSum(arr,0, target))