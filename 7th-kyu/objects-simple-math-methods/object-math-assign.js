const { pow, sqrt } = Math;
Object.assign(Number.prototype, {
  add(n) { return (this + n); },
  sub(n) { return (this - n); },
  mul(n) { return (this * n); },
  div(n) { return (this / n); },
  pow(n) { return pow(this, n); },
  sqr( ) { return sqrt(this); },
});

let n = 25;

console.log(n.add(4));
console.log(n.sub(3));
console.log(n.mul(2));
console.log(n.div(5));
console.log(n.pow(2));
console.log(n.sqr());
console.log(n.add(5).div(2).mul(3).sub(35).pow(2).sqr());