fizzbuzz = (n) => {
    let ans = []
    for(let i=1;i<=n;i++) {
        i%3  && i%5 ? ans.push("FizzBuzz") :
        i%5 ? ans.push("Buzz") : 
        i%3 ? ans.push("Fizz") : ans.push(i)
    }
    return ans
}

console.log(fizzbuzz(15));