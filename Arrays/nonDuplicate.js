//Single Duplicate value present:
let inputValues = prompt("Enter integer values of array (separated by spaces): ");

let nonDup = (inputValues) =>{
    let arr = inputValues.split(" ");
    let map = new Map();
    for( let num of arr){
        if(map.has(num)) return num;
        else{
            map.set(num,num);
        }
    }

    return "No Duplicate values found"
}

console.log(nonDup(inputValues))


//Multiple duplicates present:

// let inputValues = prompt("Enter integer values of array (separated by spaces): ");
// let nonDup = (inputValues) =>{
//     let arr = inputValues.split(" ");
//     let dups = [];
//     let map = new Map();
//     for( let num of arr){
//         if(map.has(num)) {
//             dups.push(num);
//         }
//         else{
//             map.set(num,num);
//         }
//     }

//     return dups.length ? dups : "No Duplicates present";
// }

// console.log(nonDup(inputValues))