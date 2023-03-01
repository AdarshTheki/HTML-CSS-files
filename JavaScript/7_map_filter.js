// Tutorial#20 :-

let arr = [45,36,80]

// forEach loop(operation):- calls a function once for each array element.
const array = [1,2,3]
array.forEach((value, index, array) => {
    // function logic
});

// Map method:- Create a new array by performing some operation on each array element.
let a = arr.map( (value, index, arr) =>{
    console.log("first :", value, index, arr)
    return value + 1 
});
console.log("second:", a)   // second: [ 46, 37, 81 ]

// filter method:- Create a new array by operation true then filter the value, & original array not change.  
let arr2 = [45,36,80,0,3,5]
let b = arr2.filter( (a) => {
    return a < 10
});
console.log(b)  // [ 0, 3, 5 ]

// Reduce method:- Reduce an array to a single value return.
let arr3 = [1,2,3,4,5]              // a=1 b=2 return 3, a=3 b=3 return 6, a=6 b=4 return 10.... 15
let c = arr3.reduce( (a, b) => {
    return a+b 
})
console.log(c)  // 15
