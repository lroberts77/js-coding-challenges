function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
  return this.draft - (this.crew * 1.5) > 20;
};

let emptyShip = new Ship(0,0);
let aBoat = new Ship(15,20);
let biggerBoat = new Ship(35,20);
let aWorthyShip = new Ship(100,20);

console.log(emptyShip.isWorthIt());
console.log(aBoat.isWorthIt());
console.log(biggerBoat.isWorthIt());
console.log(aWorthyShip.isWorthIt());