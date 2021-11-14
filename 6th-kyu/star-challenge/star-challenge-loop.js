rotate = (str) => {
    let ans = str.split("")
    let result = []
    for (let i =0;i<ans.length;i++){
      ans.push(ans.shift())
      result.push(ans.join(""))
    }
   return result
}

console.log(rotate("Hello"));
console.log(rotate("Hi"));