//! Topics: Function, Loops, foreach, filter, map and reduce.

// Function:

//* Function with unlimited parameter:-
function sumOfAllParameter() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumOfAllParameter(1, 2, 3, 4, 5, 7));

//* Function with given parameter:-
function sumOfParameter([a, b, c]) {
  return a + b + c;
}
let arr = [1, 2, 3, 4, 5];
console.log(sumOfParameter(arr));

//* Anonymous function:-
let nam = function () {
  console.log("Hello, How you.!");
};
nam();

//* Immediately Invoke function execute (IIFE):-
(function (name) {
  console.log("greeting!", name);
})("Self Invoke Function");

//* function Expression:-
function add(x, y) {
  return x + y;
}
console.log(add(10, 4));

let addFunction = function (x, y) {
  //* Anonymous function
  return x + y;
};
console.log(addFunction(10, 4));

let arrowFunction = (x, y) => {
  //* Arrow function
  return x + y;
};
console.log(arrowFunction(10, 4));

let nameFunction = function eval(x, y) {
  //* named function expression
  return x + y;
};
console.log(nameFunction(10, 4));

//*  Create Object and manipulate value in Object
let obj = { id: 011, name: "Adarsh", salary: 10000 };
console.log(obj);
console.log(obj.id, obj.name, obj.salary);
obj.phone = "Apple";
console.log(obj);

let emp = new Object();
emp.id = 204;
emp.name = "Sun";
emp.salary = 12000;
console.log(emp);

//* Function Construction:
// let variable_name = new Function(Arg1, Arg2..., "Function Body");
let a = 10,
  b = 20;
let fun = new Function("a", "b", "return a*b");
console.log(fun(a, b));

//* This is constructor of class Employee
function Employee(i, n, s) {
  this.id = i;
  this.name = n;
  this.salary = s;
}
const e = new Employee(101, "Ayush", 20000);
console.log("class Employee:",e);

// =================================================================================
//* Manipulating Object;
const emp2 = {
  id: 102,
  sun: "father",
  salary: 10000,
};
console.log(emp2.id);
console.log(emp2["id"]);
emp2.items = 10;
emp2["type"] = "type-In";
console.log(emp2);
emp2["salary"] = 50000;
console.log(emp2);

//* Delete key:-
delete emp2.id;
console.log("delete:",emp2);
delete emp2.salary;
console.log("delete:",emp2);

//* object Method:-
let emp3 = { id: 100, name: "adarsh", age: 24, salary: 24000 };

//* Object.keys
const keys1 = Object.keys(emp3);
console.log("Keys:", keys1);

//* Object.values
const keys2 = Object.values(emp3);
console.log("values:",keys2);

//* Object.entries
const keys3 = Object.entries(emp3);
console.log("entries:",keys3);

//* Object.freeze
Object.freeze(emp3); //* Not allow both update/delete
emp3.id = 40;
delete emp3.name;
console.log("freeze:",emp3);

//* Object.seal
Object.seal(emp);   //* allow update / but not allow delete
emp.id = 40;
delete emp.salary;
console.log("seal:",emp);

//* Object.assign
const p = Object.assign({}, emp);
console.log("assign:",p);

// =================================================================================
//! Loop: forEach, map, filter, reduce

let array = [34, 24, 36, 22];

//* loops: normal loop
for (let i = 0; i < array.length; i++) {
  let p = array[i];
  console.log("loop:",p);
}
//* forEach: calls a function once for each array element.
array.forEach((value, index) => {
  console.log("forEach:",value, index);
});

//* Map :- Create a new array by performing some operation on each array element.
array = [34, 24, 36, 22];
let x = array.map((value) => {
  return value + 1;
});
console.log(array, "Map: ", x);

//* filter: Create a new array by operation true then filter the value, & original array not change
array = [34, 24, 36, 22];
let y = array.filter((a) => {
  return a < 30;
});
console.log(array, "filter: ", y);

//* reduce: Reduce an array to a single value return.
array = [34, 24, 36, 22];
let z = array.reduce((a, b) => {
  return a + b;
});
console.log(array, "reduce: ", z);
