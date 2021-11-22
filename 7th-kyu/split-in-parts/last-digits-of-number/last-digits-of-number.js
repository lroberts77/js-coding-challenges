lastDigit = (n, d) => {
    return d <= 0 ? [] :
    [...`${n}`].slice(-d).map(el => Number(el))
}

console.log(lastDigit(123767,4));
console.log(lastDigit(0,1));
console.log(lastDigit(34625647867585,10));
console.log(lastDigit(24134,-4));