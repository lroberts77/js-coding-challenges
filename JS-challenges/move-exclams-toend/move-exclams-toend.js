remove = (s) => {
    let end = ''
    let ans = s.split('').map((a) => {
    if(a == "!") {
      end += a
      a.replace('!','')
    } else {
      return a
      }
  })
  return ans.join('') + end
}

console.log(remove("Hi! Hi!"));
console.log(remove("Hi! !Hi Hi!"));
console.log(remove("Hi! Hi!! Hi!"));