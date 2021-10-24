rentalCarCost = (d) => {
    return d >= 7 ? (d * 40) - 50 :
    d >= 3 ? (d * 40) - 20 :
    d * 40
}

console.log(rentalCarCost(2));
console.log(rentalCarCost(5));
console.log(rentalCarCost(9));