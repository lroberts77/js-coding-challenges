Number.prototype.add = function(num) { return this + num };

Number.prototype.sub = function(num) { return this - num };

Number.prototype.mul = function(num) { return this * num };

Number.prototype.div = function(num) { return this / num };

Number.prototype.pow = function(num) { return this ** num };

Number.prototype.sqr = function() { return Math.sqrt(this) };

let n = 25;

console.log(n.add(4));
console.log(n.sub(3));
console.log(n.mul(2));
console.log(n.div(5));
console.log(n.pow(2));
console.log(n.sqr());
console.log(n.add(5).div(2).mul(3).sub(35).pow(2).sqr());