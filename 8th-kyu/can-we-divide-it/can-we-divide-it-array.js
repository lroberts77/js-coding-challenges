// isDivideBy = (number, a, b) => {
//     return [a, b].every(i => number % i === 0)
// }

// isDivideBy = (number, ...val) => {
//     return val.every(i => !(number % i))
// }

isDivideBy = (...number) => {
    return number.every(i => number[0] % i === 0)
}

console.log(isDivideBy(-12, 2, -6));
console.log(isDivideBy(-12, 2, -5));
console.log(isDivideBy(45, 5, 15));