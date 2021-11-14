rotate = (str) => {
    return [...str].map(el => str = `${str.slice(1)}${str.slice(0,1)}`)
}

console.log(rotate("Hello"));
console.log(rotate("Hi"));