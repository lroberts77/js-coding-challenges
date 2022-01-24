getEvenNumbers = (numbersArray) => {
    return numbersArray.filter(a => a % 2 == 0)
}

console.log(getEvenNumbers([1,2,3,6,8,10]));
console.log(getEvenNumbers([1,2]));
console.log(getEvenNumbers([12,14,15]));