const gimme = (triplet) => {
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
};

console.log(gimme([2, 3, 1]), 0);
console.log(gimme([5, 10, 14]), 1);
console.log(gimme([-2, -3.2, 1]), 0);
console.log(gimme([-5, -10, -14]), 1);