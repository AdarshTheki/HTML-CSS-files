// Create a Person constructor function
function Person(name) {
  this.name = name;
}

// Add a method to the Person prototype
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}.`);
}

// Create a new Person object
const john = new Person('John');

// Call the sayHello method on the john object
john.sayHello(); // Output: "Hello, my name is John."

// Create a Student constructor function that inherits from Person
function Student(name, grade) {
  Person.call(this, name);
  this.grade = grade;
}

// Set the Student prototype to be a new Person object
Student.prototype = Object.create(Person.prototype);

// Add a method to the Student prototype
Student.prototype.sayGrade = function() {
  console.log(`My grade is ${this.grade}.`);
}

// Create a new Student object
const jane = new Student('Jane', 'A');

// Call the sayHello method inherited from the Person prototype
jane.sayHello(); // Output: "Hello, my name is Jane."

// Call the sayGrade method defined on the Student prototype
jane.sayGrade(); // Output: "My grade is A."
