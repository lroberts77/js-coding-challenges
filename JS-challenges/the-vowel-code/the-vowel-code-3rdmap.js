const vowels = {
    'a':1,
    'e':2,
    'i':3,
    'o':4,
    'u':5,
  }
  const encode = string => string.split('').map(el => Object.keys(vowels).includes(el) ? el = vowels[el] : el ).join('');
  
  
  const decode = string => {
    return string.split('').map(el =>{   
      
      if(Number.isInteger(parseInt(el))) {      
        let [key,] = Object.entries(vowels).find(([key,value]) => value === parseInt(el)) ;
        return key;
      }    
      return el;
  
    }).join('');
  }

console.log(encode('hello'));
console.log(decode('h2ll4'));
console.log(encode('How are you today?'));