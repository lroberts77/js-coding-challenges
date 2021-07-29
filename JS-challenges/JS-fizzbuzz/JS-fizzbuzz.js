fizzbuzz = (n) => {
    let ans = [] 
    for(let i=0;i<n;n--) {
      if(n % 3 == 0 && n % 5 == 0) {
        ans.unshift("FizzBuzz")
      } 
      else if(n % 5 == 0) {
        ans.unshift("Buzz")
      }
      else if(n % 3 == 0) {
        ans.unshift("Fizz")
      } else {
        ans.unshift(n)
      }
    }
    return ans
  }
  console.log(fizzbuzz(15));

  