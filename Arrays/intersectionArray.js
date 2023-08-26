// Intersection of Two Arrays ( common elements )

let first = prompt("Enter values of first array (separated by commas): ");
let second = prompt("Enter values of Second array (separated by commas): ");

let firstArr = first.split(",");
let secondArr = second.split(",");

let intersectionCheck = (firstArr, secondArr) => {
    let map = new Map();
    let intersection = [];

    for (let num of firstArr) {
        map.set(num, 0);
    }

    for (let num of secondArr) {
        if (map.has(num)) {
            if(!intersection.includes(num)){
             intersection.push(num);   
            }
        }
        else {
            map.set(num, 0)
        }
    }

    return intersection.length ? intersection : "No intersection found";
}

console.log(intersectionCheck(firstArr,secondArr));