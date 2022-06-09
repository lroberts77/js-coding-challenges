const getChange = (amount) => {
  if(amount.toString().charAt(0) === '£' || amount.toString().includes('.')) {
    amount *= 100; // Convert to number of pennies
  }
  const denomination = { '1p': 1, '2p': 2, '5p': 5, '10p': 10, '20p': 20, '50p': 50, '£1': 100, '£2': 200 };
  var denominations = [1, 2, 5, 10, 20, 50, 100, 200]; // pennies
  var result = [];
  while (amount > 0) {
      let coinValue = Object.entries(denomination).pop()
      denomination  = 
      var coin = coinValue.pop(); // Get next greatest coin
      var count = Math.floor(amount/coin); // See how many times I need that coin
      amount -= count * coin; // Reduce the amount with that number of coins
      if (count) result.push([count, coinValue]); // Store count & coin
  }
  return result.map(([count, coinValue]) => `${count} ${coinValue}`).join(', ') //${coin >= 1 ? £${coin} : ${coin}p}
}

console.log(getChange(2));
console.log(getChange(4));
console.log(getChange(2.5));