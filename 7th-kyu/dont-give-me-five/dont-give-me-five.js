const dontGiveMeFive = (start, end) => {
  let arr = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      arr.push(i);
    }
  }
  return arr.length;
};

console.log(dontGiveMeFive(1,9), 8)
console.log(dontGiveMeFive(4,17), 12)
console.log(dontGiveMeFive(1,90), 72)
console.log(dontGiveMeFive(-4,17), 20)