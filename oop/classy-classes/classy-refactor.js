class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = `${this.name}s age is ${this.age}`
  }
}

let john = new Person('john', 34)

console.log(john.info);