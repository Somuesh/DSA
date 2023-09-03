// Implement a function that takes a string as input and returns the first non-repeating character in the string.

const nonRepeating = (str) => {
    let map = new Map()
    for (let i of str) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        }
        else {
            map.set(i, 1);
        }
    }

    for (let i of str) {
        if (map.get(i) < 2) {
            return i
        }
        else {
            continue;
        }
    }
    return "All are dups"
}

let str = "soomeeesssshhhhh";

console.log(nonRepeating(str));