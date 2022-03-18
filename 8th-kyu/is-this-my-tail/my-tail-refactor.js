// const correctTail = (body, tail) => {  
//     return body.endsWith(tail) 
// }

const correctTail = (body, tail) => {  
    // return body.slice(-1) === tail
    return body[body.length-1] == tail
}

console.log(correctTail("Rhino", "o"));
console.log(correctTail("Emu", "t"));