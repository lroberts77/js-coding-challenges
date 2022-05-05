class Animal {
  constructor(name) {
    this.name = name;
  }
}


class Cat extends Animal {
  get speak() {
    return `${this.name} meows.`
  }
}

let cat = new Cat('Mr Whiskers');

console.log(cat.speak);