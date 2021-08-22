var vowels = {
    a:1,
    e:2,
    i:3,
    o:4,
    u:5
  };

encode = (string) => {
    return string.split('').map(e => vowels[e] ? vowels[e] : e).join('');
  }
  
decode = (string) => {
    return string.split('').map(e => parseInt(e)<6 ? Object.keys(vowels)[e-1] : e).join('');
  }
  

console.log(encode('hello'));
console.log(decode('h2ll4'));
console.log(encode('How are you today?'));