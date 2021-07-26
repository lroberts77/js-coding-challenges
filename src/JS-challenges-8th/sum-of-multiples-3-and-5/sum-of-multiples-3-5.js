findSum = (n) => {
    let sum = 0;
    for(let i=0; i<n; n--) {
      n % 5 == 0 || n % 3 == 0 ? sum += n : 0;
    }
    return sum
  }
  console.log(findSum(10));