const convert = (time) => {
  return time.toISOString().slice(11, 23).replace(`.`, `,`);
};

console.log(convert(new Date(2016, 2, 8, 16, 42, 59)));
console.log(convert(new Date(1951, 10, 31, 2, 2, 24, 399)));
console.log(convert(new Date(1523, 5, 29, 23, 2, 2, 9)));
console.log(convert(new Date(1978, 3, 18, 12, 0, 0, 0)));
