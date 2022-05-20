const squareIt = (int) => {
  let ans = ''
  let array = [...`${int}`]
  let square = Math.sqrt([...`${int}`].length)
  if(Number.isInteger(square)) {
    for(let i=0;i<array.length;i++) {
      if(i>1 && i%square === 0) {
        ans += '\n'
      }
      ans += array[i]
    }
    return ans
  }
  return 'Not a perfect square!'
}



console.log(squareIt(1), "1");
console.log(squareIt(222), "Not a perfect square!");
console.log(squareIt(234562342342), "Not a perfect square!");
console.log(squareIt(112141568), "112\n141\n568");