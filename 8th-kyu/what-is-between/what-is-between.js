between = (a, b) => {
    let ans = []
    while (a <= b) {
      ans.push(a)
      a++
    }
    return ans
}

console.log(between(1, 4));
console.log(between(-2, 2));
console.log(between(-10, 10));