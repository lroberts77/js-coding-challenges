const getScore = (n) => {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i * 50;
  }
  return ans;
};

console.log(getScore(1));
console.log(getScore(2));
console.log(getScore(3));
console.log(getScore(4));
console.log(getScore(5));
