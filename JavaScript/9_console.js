alert("Hello world")
console.time("a")
console.log(console)
console.log("console")
console.info("info")
console.warn("warn")
console.error("error")
console.assert("assert"!=false)
console.assert("assert" ==false)
console.timeEnd("a")


// Outputting the Data:-(Not used)
// (used modaals)
alert("Enter the value of a !")
let a = prompt("Enter a here","567")
a = Number.parseInt(a)
alert("you Enterd a of type "+(typeof a))
let write  = confirm("Do you want to write if to the m")
document.write(a)



// window: DOM BOM
window.console.log(window)
console.log(document.body)

/*Document Object Model (DOM): 
DOM represent the page contect HTML (document.body.style.background="") */

document.body.style.background="red" // change page background to red

/* Brouser Object Model(BOM):
It is represent addtional object provideed by the browser(host envirement) for working with everthing except the document.
the function alert/confirm/prompt are also a part of BOM  */

location.href = "https://myworlds.com"  // redirect to another URL.


