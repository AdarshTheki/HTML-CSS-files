/*  JavaScript :- Basic */

console.log("the world is my first programming Language")

let x = 22
x = 24              // let x = 24 not redefined but value change 
var y = 67      
var y = 60          // redefine & value changed
const z = 'Adarsh'  // not change any 
console.log(x, y, z)

let a = null;
let b = 3.45;
let c = true;
let d = BigInt("549") + BigInt("4")
let e = 'Harry'
let f = Symbol("I am a Adarsh Verma")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof a, typeof b,  typeof c,  typeof d,  typeof e, typeof f,  typeof g)

// This is Object in JavaScript. (not Dictionary)
const item = {
    'harry':'verma',
    'Adarsh':false,
    'Lovish':67,
    'Rohan':undefined
}
item['harry'] = 45          
item['friends'] = 'Ayush'

console.log(item['harry'])  // 45
console.log(item.harry)     // 45
console.log(item.friends)   // Ayush
console.log(item.Ravi)      // undefined

console.log("Adarsh Verma And how are you");
