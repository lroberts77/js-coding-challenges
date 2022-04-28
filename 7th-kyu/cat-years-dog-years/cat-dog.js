const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0,
    dogYears = 0;
  for (let i = 1; i <= humanYears; i++) {
    if (i < 2) {
      catYears += 15;
      dogYears += 15;
    } else if (i == 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(1), [1, 15, 15]);
console.log(humanYearsCatYearsDogYears(2), [2, 24, 24]);
console.log(humanYearsCatYearsDogYears(10), [10, 56, 64]);
