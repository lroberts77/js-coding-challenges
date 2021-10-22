fizzbuzz = (n) => {
    let ans = []
    for(let i=1;i<=n;i++) {
        i%3 == 0  && i%5 == 0 ? ans.push("FizzBuzz") :
        i%5 == 0 ? ans.push("Buzz") : 
        i%3 == 0 ? ans.push("Fizz") : ans.push(i)
    }
    return ans.join('\n')
}

console.log(fizzbuzz(15));