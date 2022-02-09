const getMiddle = (s) => {
  return s.slice((s.length-1)/2, s.length/2+1);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log('A');
console.log(getMiddle("middle"));