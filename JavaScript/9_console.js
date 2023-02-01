// Advantages of saperate script file
// 1. Seperation of concerns
// 2. Browser cashing.

alert("Hello world")
console.time("a")
console.log(console)    // list of all function
console.log("console")
console.info("info")
console.warn("warn")
console.error("error")
console.assert("assert"!=false)     // used of condition true then run function
console.assert("assert" ==false)    // otherwise error display of assert function 
console.timeEnd("a")
console.clear()                     // console clear all
obj = {a:1,B:2,C:3}
console.table(obj)                    // create table in index and value
console.warn("plz don't drink shoda") // warnning massage                 
console.info()
console.log()

// Outputting the Data:-(Not used)
// (used modaals)
// Interaction: alert, prompt and confirm
/* 
alert: used to invoke a mini windows with a massage alert("hello")
prompt: used to used to take user input as string
   a = prompt("Hi", "no")     Hi = massage show, no = value(default)
confirm:
*/
alert("Hello your script is run here...!")
let a = prompt("enter your number: ")
a = Number.parseInt(a);
alert("You entered 'a' of type "+(typeof a))

let write = confirm("do you wnat to write in to the page")
if(write){
   document.write(a)
}
else{
   document.write("please allow me to write.")
}

