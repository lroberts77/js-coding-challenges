const sevenAte9 = (str) => {
  while (str.includes('797')) {
    str = str.replace('797', '77')
  }
  return str
}

// const sevenAte9 = str => str.replace(/(?<=7)9(?=7)/g, '')

console.log(sevenAte9('797'), '77');
console.log(sevenAte9('7979797'), '7777');
console.log(sevenAte9('165561786121789797'), '16556178612178977');
console.log(sevenAte9('979') , '979');
console.log(sevenAte9('9797979'), '97779');