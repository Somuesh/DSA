// Take 2 2d arrays from the user and return a 2d array as their sum.
// Note - rows and cols must be same of both the input matrix else throw an error message "Arrays must have the same dimensions"

let firstArr = [[1,2,3],[4,5,6],[7,8,9]];
let secondArr = [[9,8,7],[6,5,4],[3,2,1]];

let resultArr = []

if(firstArr.length === secondArr.length && firstArr[0].length === secondArr[0].length){
    for(let i=0, j=0; i<=firstArr.length ; i++, j++ ){
        resultArr.push(firstArr[i][j] + secondArr[i][j])
    }

    console.log(resultArr);
}
else{
    console.log("Arrays must be of same dimensions");
}