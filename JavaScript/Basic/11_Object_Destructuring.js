// Destructuring

// Array Destructuring
const arr = [1, 2, 3, 4, 5];
const [a, b, ...rest] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

// Object Destructuring
const singleObject = {x: 1, y: 2, z: 3};
const {x, y, z} = singleObject;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

const nestedObject = {
  p: 1,
  q: { r: 2 }
};
const { p, q: { r } } = nestedObject;
console.log(p); // 1
console.log(r); // 2