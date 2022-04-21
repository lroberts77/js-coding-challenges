const isNarcissistic = (n) => {
  let arr = `${n}`.split('')
  let ans = 0
  for(let i=0;i<arr.length;i++) {
    ans += Math.pow(arr[i],arr.length)
  }
  return ans === n
}

console.log(isNarcissistic(153), true)
console.log(isNarcissistic(234229983), false)
console.log(isNarcissistic(1), true)
console.log(isNarcissistic(435), false)
console.log(isNarcissistic(4328), false)