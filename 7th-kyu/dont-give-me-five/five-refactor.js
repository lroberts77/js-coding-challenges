const dontGiveMeFive = (start, end) => {
  return [...Array(end - start + 1).keys()]
    .map((a) => a + start)
    .filter((el) => !/5/.test(el)).length;
};

console.log(dontGiveMeFive(1, 9), 8);
console.log(dontGiveMeFive(4, 17), 12);
console.log(dontGiveMeFive(1, 90), 72);
console.log(dontGiveMeFive(-4, 17), 20);
