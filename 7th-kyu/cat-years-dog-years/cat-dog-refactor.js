const humanYearsCatYearsDogYears = (humanYears) => {
  return humanYears < 2
    ? [humanYears, humanYears * 15, humanYears * 15]
    : humanYears == 2
    ? [2, 24, 24]
    : [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
};

console.log(humanYearsCatYearsDogYears(1), [1, 15, 15]);
console.log(humanYearsCatYearsDogYears(2), [2, 24, 24]);
console.log(humanYearsCatYearsDogYears(10), [10, 56, 64]);
