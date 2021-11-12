isDivideBy = (number, a, b) => {
    return number % a == 0 && number % b == 0 ? true : false
    // return number % a == 0 && number % b == 0
}

console.log(isDivideBy(-12, 2, -6));
console.log(isDivideBy(-12, 2, -5));
console.log(isDivideBy(45, 5, 15));