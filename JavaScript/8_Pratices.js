// Add number in given array ?
let arr = [1,2,3,4,5]
let a = prompt("enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

// Add number n to zero in given array ?
let arr1 = [1,2,3,4,5]
let b;
do{
    b = prompt("enter a number")
    b = Number.parseInt(b)
    arr1.push(b)
    console.log(arr1)
}while(b!=0);
console.log(arr1)

// filter for number divisible by 10 from a given array ?
let arr3 = [1,2,3,45,65,3,2,20,40,70]
let n = arr3.filter( (x)=> {
    return x%10==0
});
console.log(n)

// create an array of square of given number ? 
let arr4 = [1,2,3,45,65,3,2,20,40,70]
let m = arr4.map( (x)=> {
    return x*x
});
console.log(arr4, m)

// use reduce to calculate factorial of a given number from from an array of first n natural number.[n bring number whose factorial needs to be calculated]
let arr5 = [1,2,3,4]
let o = arr5.reduce( (x,y)=> {
    return x*y
});
console.log(arr5, o)

// // write a program Enter your guss number 1 to 100 ?
// let x = prompt("Enter your guss number 1 to 100 is:")
// x = Number.parseInt(x)
// let num  = random.randrange(1,101)
// console.log(num)
// if(x<num){
//     console.log("your guss is smoller:")
// }
// else if(x>num){
//     console.log("your guss is bigger:")
// }
// else {
//     console.log("your guss is correct \n you are win!..")
// }
