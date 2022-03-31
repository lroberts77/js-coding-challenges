const convert = (time) => {
  return (
    `${time.getHours()}`.padStart(2, "0") +
    ":" +
    `${time.getMinutes()}`.padStart(2, "0") +
    ":" +
    `${time.getSeconds()}`.padStart(2, "0") +
    "," +
    `${time.getMilliseconds()}`.padStart(3, "0")
  );
};

console.log(convert(new Date(2016, 2, 8, 16, 42, 59)));
console.log(convert(new Date(1951, 10, 31, 2, 2, 24, 399)));
console.log(convert(new Date(1523, 5, 29, 23, 2, 2, 9)));
console.log(convert(new Date(1978, 3, 18, 12, 0, 0, 0)));