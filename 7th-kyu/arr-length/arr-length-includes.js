const arrLength = (s) => {
  return s.includes(s.length) ? 
  Array(s.length).fill(s.length) :'err'
}

console.log(arrLength([1,2,3,4,5]));
console.log(arrLength([17,10,4,8]));
console.log(arrLength([17,12,20,36]));