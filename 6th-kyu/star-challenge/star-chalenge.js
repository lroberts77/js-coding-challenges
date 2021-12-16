rotate = (str) => {
    let ans = []
    for (let i=0;i<str.length;i++) {
      let [first, ...rest] = str;
      a = [...rest, first];
      str = a
      ans.push(str.join(''));
    }
    return ans
}

console.log(rotate("Hello"));
console.log(rotate("Hi"));
