const vowels = ['a', 'e', 'i', 'o', 'u'];

encode = (string) => {
  return [...string].map(a => vowels.includes(a) ? vowels.indexOf(a)+1 : a).join('')
  }

decode = (string) => {
  return[...string].map(a => Number(a) ? vowels[Number(a)-1] : a).join('')
}
console.log(encode('hello'));
console.log(decode('h2ll4'));
console.log(encode('How are you today?'));