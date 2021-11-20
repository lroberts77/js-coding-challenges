bmi = (weight, height, calc = weight / (height ** 2)) => {
    return calc <= 18.5 ? 'Underweight' :
    calc <= 25 ? 'Normal' :
    calc <= 30 ? 'Overweight' : 'Obese'
}

console.log(bmi(50, 1.80));
console.log(bmi(80, 1.80));
console.log(bmi(90, 1.80));
console.log(bmi(110, 1.80));