const correctTail = (bod, tail) => {  
    let body = bod.substr(bod.length-1)
    return body == tail 
}

console.log(correctTail("Fox", "x"));
console.log(correctTail("Rhino", "o"));
console.log(correctTail("Emu", "t"));
console.log(correctTail("Badger", "s"));