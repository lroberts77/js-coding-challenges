abbrevName = (name) => {
    return name.toUpperCase().split(' ').map(a => a[0]).join('.')
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("P Zavuzzi"));