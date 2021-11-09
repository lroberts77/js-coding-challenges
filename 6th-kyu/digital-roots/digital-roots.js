digital_root = (n) => {
    let a = n.toString().split('').map(Number).reduce((a, b) => {
    return a + b;
  });
    return a.toString().split('').length > 1 ? digital_root(a) : a
}

console.log(digital_root(16));
console.log(digital_root(195));
console.log(digital_root(999999999999));
console.log(digital_root(10));