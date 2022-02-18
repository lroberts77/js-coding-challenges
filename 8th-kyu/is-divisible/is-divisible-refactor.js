const isDivisible = (n, x, y) => {
  return !(n % x || n % y);
};

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4));
console.log(isDivisible(17, 17, 17));
