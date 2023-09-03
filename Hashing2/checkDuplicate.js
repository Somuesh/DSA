// Implement a function that takes an array of integers as input and checks if there are any duplicate elements using hashing.

let arr = [3,6,2,55,34,12,6,3,55,8,9]
let map = new Map()

for( let i of arr){
    if(map.has(i)) console.log(`${i} already exists`);
    map.set(i, i)
}

console.log(map.values())