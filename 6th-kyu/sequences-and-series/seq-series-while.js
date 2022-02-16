const getScore = (n, i = 0, ans = 0) => {
  while (i <= n) {
    ans += i * 50;
    i++;
  }
  return ans;
};

console.log(getScore(1));
console.log(getScore(2));
console.log(getScore(3));
console.log(getScore(4));
console.log(getScore(5));
