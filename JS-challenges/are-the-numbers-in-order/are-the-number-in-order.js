inAscOrder = (arr) => {
    return arr.every((x, i) =>
    i === 0 || x >= arr[i - 1]) ? true : false
}
console.log(inAscOrder([1, 2, 4, 7, 19]));
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));