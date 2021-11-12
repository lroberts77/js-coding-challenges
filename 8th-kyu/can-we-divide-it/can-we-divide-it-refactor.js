isDivideBy = (number, a, b) => {
    return !(number % a) && !(number % b)
}

console.log(isDivideBy(-12, 2, -6));
console.log(isDivideBy(-12, 2, -5));
console.log(isDivideBy(45, 5, 15));