doubleChar = (str) => {
    return str.split('').map((a) => a+a).join('')
}
console.log(doubleChar('3445'))
console.log(doubleChar("Adidas"));

//regex 

// doubleChar = (str) => {
//     return str.replace(/(.)/g, "$1$1")
//   }
// console.log(doubleChar('hello'))
// console.log(doubleChar("Adidas"));
  