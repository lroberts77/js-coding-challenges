const gimme = (triplet) => {
  let sortedtriplet = [...triplet].sort((a, b) => a - b);
  return triplet.indexOf(sortedtriplet[1]);
};

console.log(gimme([2, 3, 1]), 0);
console.log(gimme([5, 10, 14]), 1);
console.log(gimme([-2, -3.2, 1]), 0);
console.log(gimme([-5, -10, -14]), 1);
