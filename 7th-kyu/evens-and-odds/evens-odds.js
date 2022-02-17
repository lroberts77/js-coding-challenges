const evensAndOdds = (num) => {
  return num % 2 === 0 ? num.toString(2) : num.toString(16);
};

console.log(evensAndOdds(2));
console.log(evensAndOdds(13));
console.log(evensAndOdds(47));
console.log(evensAndOdds(12800));
