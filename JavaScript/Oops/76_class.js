class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
const rect = new Rectangle(5, 10);
console.log(rect.getArea()); // 50

// Classes can also inherit from other classes using the extends keyword:
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}
const square = new Square(5);
console.log(square.getArea()); // 25

// objects are created using constructor functions or object literals.
let persons = {
  name: "John",
  age: 30,
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// creating an object using a constructor function:
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };
}
let person1 = new Person("John", 30);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}
let person = new Person("John", 30);
