const blackAndWhite = (arr) => {
    return !Array.isArray(arr) ? "It's a fake array" :
    arr.includes(5) && arr.includes(13) ? "It's a black array" :
    "It's a white array"
}

console.log(blackAndWhite(5,13));
console.log(blackAndWhite([5,13]));
console.log(blackAndWhite([5,12]));