class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a noise, `;
  }
}

class Cat extends Animal {
  get speak() {
    return `${super.speak()} ${this.name} goes meow.`
  }
}

let cat = new Cat('Mr Whiskers');

console.log(cat.speak, 'Mr Whiskers makes a noise, Mr Whiskers goes meow.');