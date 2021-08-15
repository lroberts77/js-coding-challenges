squareDigits = (num) => {
    return Number(num.toString().split('').map((a) => a*a).join(''))
  }
console.log(squareDigits(3212))
console.log(squareDigits(9119));