const getScore = (n) => {
  let ans = 50;
  for (let i = 1; i < n; i++) {
    ans += (i + 1) * 50;
  }
  return ans;
};

console.log(getScore(1));
console.log(getScore(2));
console.log(getScore(3));
console.log(getScore(4));
console.log(getScore(5));
