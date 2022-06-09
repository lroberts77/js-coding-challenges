const getChange = (amount) => {
  // if(amount.toString().charAt(0) === '£' || amount.toString().includes('.')) {
  //   amount *= 100; // Convert to number of pennies
  // }

  if(amount.toString().charAt(0) === '£') {
    amount = Number(amount.slice(1))
    amount *= 100; // Convert to number of pennies
  }

  if(amount.toString().includes('.')) {
    amount *= 100; // Convert to number of pennies
  }

  const denomination = [['1p', 1], ['2p', 2], ['5p', 5], ['10p', 10], ['20p', 20], ['50p', 50], ['£1', 100], ['£2', 200]];
  // var denominations = [1, 2, 5, 10, 20, 50, 100, 200]; // pennies
  var result = [];
  while (amount > 0) {
      var coinValuePair = denomination.pop(); // Get next greatest coin
      let coin = coinValuePair[1]
      let coinstring = coinValuePair[0]
      var count = Math.floor(amount/coin); // See how many times I need that coin
      amount -= count * coin; // Reduce the amount with that number of coins
      if (count) result.push([count, coinstring]); // Store count & coin
  }
  return result.map(([count, coinstring]) => `${count} ${coinstring}`).join(', ')
}

console.log(getChange('£2'));
console.log(getChange(1.23));
console.log(getChange(523));
console.log(getChange(5.23));

// ||