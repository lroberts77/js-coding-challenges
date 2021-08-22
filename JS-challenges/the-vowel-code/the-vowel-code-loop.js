var vowels = [...'aeiou']
encode = (string) => {
  var s = "";
  for (var i = 0; i < string.length; i++) {
    s += vowels.indexOf(string[i])+1 || string[i];
  }
  return s;
}

decode = (string) => {
  var s = "";
  for (var i = 0; i < string.length; i++) {
    s += vowels[string[i]-1] || string[i];
  }
  return s;
}


console.log(encode('hello'));
console.log(decode('h2ll4'));
console.log(encode('How are you today?'));