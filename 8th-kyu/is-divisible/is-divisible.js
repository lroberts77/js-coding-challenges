const isDivisible = (n, x, y) => {
//   return n % x == 0 && n % y == 0 ? true : false;
//   return n % x == 0 && n % y == 0
return !(n%x || n%y)
};

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4));
console.log(isDivisible(17, 17, 17));
