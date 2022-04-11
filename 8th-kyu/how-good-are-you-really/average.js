const betterThanAverage = (classPoints, yourPoints) => {
  let totalPoints = classPoints.reduce((a,b) => a + b) + yourPoints
  let average = totalPoints / (classPoints.length + 1)
  return yourPoints > average 
}

console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69), true);
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);