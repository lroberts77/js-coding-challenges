const vowels = {a: 1, e: 2, i: 3, o: 4, u: 5};

const encode = (string) => {
  return string.replace(/[aeiou]/g, val => vowels[val]);
}

const decode = (string) => {
  return string.replace(/[1-5]/g, val => Object.keys(vowels)[--val]);
}

console.log(encode('hello'));
console.log(decode('h2ll4'));
console.log(encode('How are you today?'));