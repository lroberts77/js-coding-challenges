makeNegative = (num) => {
    return num > 0 ? Number(`${-num}`) : num
}

console.log(makeNegative(42));
console.log(makeNegative(0));
console.log(makeNegative(-9));