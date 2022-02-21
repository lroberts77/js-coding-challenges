const isVeryEvenNumber = (n) => {
    while (String(n).length > 1) {
        n = [...`${n}`].map(Number).reduce((a, b) => a + b)
    }
    return n % 2 == 0 ? true : false
};

console.log(isVeryEvenNumber(0));
console.log(isVeryEvenNumber(4));
console.log(isVeryEvenNumber(12));
console.log(isVeryEvenNumber(222));
console.log(isVeryEvenNumber(1234));
