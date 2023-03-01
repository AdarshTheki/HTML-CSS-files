//! Variables, Primitive DataType, Object and Array

/**
 * ? Variable:
 * - Cannot be a reserved Keyword
 * - should be meaningful
 * - Cannot contain a space or hyphen(-)
 * - Are Case-Sensitive
 **/
var name = "Adarsh";
let name1 = "Verma";
let gender = "Male";
let firstName = "Adarsh",
  lastName = "verma";
console.log(firstName, lastName);

//? Primitive DataType:
let a = "Mosh"; // string
let b = 3.14; // Number
let c = true; // Boolean
let d = undefined; // Undefine
let e = null; // Null
let f = Object(); // Array / function() This are Object.
let g = Symbol("Hey, I am Adarsh"); // Symbol
console.log("=>", a, b, c, d, e, f, g);
console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g
);

//? Dynamic Typing:
console.log(typeof a);
a = 1;
console.log(typeof a);
console.log(this);

//? Object:
let person = {
  age: 30,
  name: "Adarsh",
};
person["name"] = "Merge"; // change 'name'
person["use"] = null; // add 'use'
console.log(person);
console.log(person.name, person.age, person.use);

//?   Array:

let arr = ["red", "black", "green", 10, 20];
const arrays = new Array(10);
let marks = [91, 21, 45, false, "not present"];
let a1 = console.log("a1: ", marks.toString());
let b1 = console.log("b1: ", marks.join("-"));
let c1 = console.log("c1: ", marks.pop());
let d1 = console.log("d1: ", marks.push(56));
let e1 = console.log("e1: ", marks.concat(b1));
let f1 = console.log("f1: ", marks.sort());
let g1 = console.log("g1: ", marks.reverse());
let h1 = console.log("h1: ", marks.slice(1, 4, 1));
let i1 = console.log("i1: ", marks.unshift(5)); // explain
let j1 = console.log("j1: ", marks.shift(5)); // explain
let k1 = console.log("k1: ", marks.indexOf(21));
let l1 = console.log("l1: ", marks.length);
let m1 = console.log("m1: ", marks.splice(3, 4));

// String:
let nam = "Adarsh verma";
console.log("length:", nam.length);
console.log("slice:", nam.slice(2));
console.log("substring:", nam.substring(0, 2));
console.log("substr:", nam.substr(2, 3));
console.log("trim:", nam.trim());
console.log("split:", nam.split("-"));
console.log("toUpperCase:", nam.toUpperCase());
console.log("toLowerCase:", nam.toLowerCase());

// string interpolation `${Arg}`
let uname = "Adarsh";
let surname = "Verma";
console.log(`This name is ${uname} and his surname is ${surname} .`);
