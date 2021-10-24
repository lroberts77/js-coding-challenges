rentalCarCost = (d) => {
    return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0) 
}

console.log(rentalCarCost(2));
console.log(rentalCarCost(5));
console.log(rentalCarCost(9));