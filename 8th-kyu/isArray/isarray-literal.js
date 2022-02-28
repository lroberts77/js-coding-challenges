const blackAndWhite = (arr) => {
    return `It's a ${!Array.isArray(arr) ? `fake`  :
    arr.includes(5) && arr.includes(13) ? `black` :
    `white`} array`
}

console.log(blackAndWhite(5,13));
console.log(blackAndWhite([5,13]));
console.log(blackAndWhite([5,12]));