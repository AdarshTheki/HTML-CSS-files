let arr = [45,36,80]

// Map method:- (return array)
let a = arr.map( (value, index, arr) =>{
    console.log("first :", value, index, arr)
    return value + 1 
})
console.log("second:", a)   // second: [ 46, 37, 81 ]

// Filter mathod:- (return array)
let arr2 = [45,36,80,0,3,5]
let b = arr2.filter( (a) => {
    return a < 10
})
console.log(b)  // [ 0, 3, 5 ]

// Reduce mathod:- (return number)
let arr3 = [1,2,3,4,5]              // a=1,b=2 and return a+b=3.....
let c = arr3.reduce( (a, b) => {
    return a+b 
})
console.log(c)  // 15
