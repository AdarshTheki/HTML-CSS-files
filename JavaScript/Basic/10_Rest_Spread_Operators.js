// Rest Operators

// Example:1
const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4, 5));

// Example:2
const arr = [1, 2, 3, 4, 5];
const [a, b, ...rest] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

// Spread Operators

// Example:1
const arr1 = ['hey', 'this', 'is', 'me'];
let arr2 = ['second', 'array'];
(function() {
  arr2 = [...arr1]; // change this line
  // arr2 = arr1; 
  arr1[0] = 'Photo'; 
})();
console.log(arr2);
console.log(arr1[0]);