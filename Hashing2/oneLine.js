// Given a list of 2D points, write a function to find the maximum number of points that lie on the same line using hashing.

let input = [[1, 1], [2, 2], [3, 3], [4, 5], [5, 6], [6, 7]]

/*
Since we know, for a point to lie on same line it must have same slope
and slope = y/x
*/

let sameLine = (input) => {
    let map = new Map();

    for (let xy of input) {

        //handling case where denominator will be zero (when point lies on x-axis itself)
        if (xy[0] == 0) {
            let slope = xy[1];
            if (map.has(slope)) {
                map.set(slope, map.get(slope) + 1);
            }
            else {
                map.set(slope, 1);
            }
        }
        else {
            let slope = xy[1] / xy[0];

            if (map.has(slope)) {
                map.set(slope, map.get(slope) + 1);
            }
            else {
                map.set(slope, 1);
            }
        }
    }

    return Math.max(...map.values());
}

console.log(sameLine(input));