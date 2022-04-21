const sameCase = (a, b) => {
  return a.match(/[A-Z]/) && b.match(/[A-Z]/) 
    || a.match(/[a-z]/) && b.match(/[a-z]/) ? 1 :
    !a.match(/[A-Z]/i) || !b.match(/[A-Z]/i) ? -1 :
    0
}

console.log(sameCase('C', 'B', 1));
console.log(sameCase('A', 's', 0));
console.log(sameCase('A', '?', -1));
console.log(sameCase('d', 'd', 1));