check = (a, x) => {
    return a.includes(x)
}

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));