
// Window: DOM , BOM & Object(JavaScript core)
window.console.log(window)
console.log(document.body)

/* DOM (Document Object Model): DOM represent the page contect HTML
document.body -> page body as Js. object  */ 
document.body.style.background="red" // change page background to red

/* BOM (Browser Object Model):
It is represent addtional object provideed by the browser(host envirement) for working with everthing except the document. The function alert/confirm/prompt are also a part of BOM  */
location.href = "https://google.com"  // redirect to another URL.


// Question;

// 1. Write a program sing prompt function to table input of age as a value from the user and usa alert to tell him if he can drive.
let age = prompt("Enter your age")
age = Number.parseInt(age)

if(canDrive(age)){
   alert("yes you can drive")
}
else{
   alert("No you cannot drive")
}

// 2. In use confirm to ask the user if he wants to see the prompt again.

// 3. in the privious question use console.error to log the error if the tag entered is negative ?

// 4. write a program to change the url to google.com (redirection) if user enter a number greater than 4 ?

// 5. change the background of the page to yellow, red or any other color based on user input through prompt ?

