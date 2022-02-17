function isPalindrome(x) {
  x = x.toLowerCase();
  let y = "";
  for (let i = x.length - 1; i >= 0; i--) {
    y += x[i].toLowerCase();
  }
  return y == x ? true : false;
}

console.log(isPalindrome("a"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));
console.log(isPalindrome(""));
console.log(isPalindrome("Madam"));
