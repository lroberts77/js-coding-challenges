const sevenAte9 = (str) => {
  let answer = ''
  for(let i=0;i<str.length;i++) {
    str[i] == '9' && str[i-1] == '7' && str[i+1] == '7' ? answer += '' : answer += str[i] 
  }
  return answer
}

console.log(sevenAte9('797'), '77');
console.log(sevenAte9('7979797'), '7777');
console.log(sevenAte9('165561786121789797'), '16556178612178977');
console.log(sevenAte9('979') , '979');
console.log(sevenAte9('9797979'), '97779');