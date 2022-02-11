const arrLength = (s) => {
  for (let el of s) {
    if (el == s.length) {
      return Array(s.length).fill(s.length);
    }
  }
  return "err";
};

console.log(arrLength([1,2,3,4,5]));
console.log(arrLength([17,10,4,8]));
console.log(arrLength([17,12,20,36]));
