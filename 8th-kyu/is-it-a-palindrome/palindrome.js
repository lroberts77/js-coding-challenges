const isPalindrome = (x) => {
  x = x.toLowerCase();
  if (x.length < 2) {
    return true;
  }
  for (let i = 0; i < Math.floor(x.length / 2); i++) {
    return x[i] == x[x.length - 1 - i] ? true : false;
  }
};

console.log(isPalindrome("a"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));
console.log(isPalindrome(""));
console.log(isPalindrome("Madam"));
