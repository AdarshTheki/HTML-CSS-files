// add no.in given array
let arr = [1,2,3,4,5]
let a = prompt("enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

// add no. n to zero in given array
let arr1 = [1,2,3,4,5]
let b;
do{
    b = prompt("enter a number")
    b = Number.parseInt(b)
    arr1.push(b)
    console.log(arr1)
}while(b!=0);
console.log(arr1)

let arr3 = [1,2,3,45,65,3,2,20,40,70]
let n = arr3.filter( (x)=> {
    return x%10==0
})
console.log(n)

let arr4 = [1,2,3,45,65,3,2,20,40,70]
let m = arr4.map( (x)=> {
    return x*x
})
console.log(arr4,m)

let arr5 = [1,2,3,4]
let o = arr5.reduce( (x,y)=> {
    return x*y
})
console.log(arr5,o)