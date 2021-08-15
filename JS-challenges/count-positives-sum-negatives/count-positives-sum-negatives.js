countPositivesSumNegatives = (input) => {
    return  !input || !input.length ? [] : 
    [(input.filter(i => i > 0)).length ,
        (input.filter(i => i < 0)).reduce((a,b) => a+b)]
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
