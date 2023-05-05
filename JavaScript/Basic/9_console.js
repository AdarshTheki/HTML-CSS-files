// Advantages of separate script file
// 1. Separation of concerns
// 2. Browser cashing.
// Developer tools: Element, Console, Network

//Console Object Methods (Comprehensive list lookup MDN):-
console.log(console)                // list of all function
console.assert("assert"!=false)     // used of condition true then run function
console.assert("assert" ==false)    // otherwise error display of assert function 
console.log("console log")          // Output message to the console
console.info("info")                // used for special massage
console.warn("don't drink ")        // warning massage                 
console.error("error")              // used for error
console.time("a")
obj = {a:1,B:2,C:3}
console.table(obj)                  // create table in index and value
console.timeEnd("a")
console.clear()                     // console clear all


// Outputting the Data:-
//(Not used) Only used for Modaals(Good Practices)
/* 
Interaction: alert, prompt and confirm
alert: used to invoke a mini windows with a massage alert("hello")
prompt: used to used to take user input as string
   a = prompt("Hi", "no")     Hi = massage show, no = value(default)
confirm: return only Yes or No option.
*/
alert("Hello your script is run here...!")
let a = prompt("enter your number: ")
a = Number.parseInt(a);
alert("You entered 'a' of type "+(typeof a))

let write = confirm("do you want to write in to the page")
if(write){
   document.write(a)
}
else{
   document.write("please allow me to write.")
}

