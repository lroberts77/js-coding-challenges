const arrLength = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s.length) {
      return Array(s.length).fill(s[i]);
    }
  }
  return "error";
};

console.log(arrLength([1,2,3,4,5]));
console.log(arrLength([17,10,4,8]));
console.log(arrLength([17,12,20,36]));