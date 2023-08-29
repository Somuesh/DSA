let string = "IamSuperHuman";

let blankstr = ""
let reverseString = (str, len) => {
    if(len == str.length) return;
    
    reverseString(str, len + 1);
    blankstr += str[len]
    
    return blankstr
}

console.log(reverseString(string, 0))

// let string = "IamSuperHuman";

// let abc = ()=> {
//     let blankstr = ""
//     return (reverseString = (str, len) => {
//     if(len == str.length) return;
    
//     reverseString(str, len + 1);
//     blankstr += str[len]
    
//     return blankstr})
// }

// console.log(abc()(string, 0))