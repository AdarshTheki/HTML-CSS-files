<h1 align="center"> Advance JavaScript </h1> 

### What is JavaScript ?
-   Is an interpreted, client-side, event-base, object-oriented scripting language.
-   It is invented in 1995 at Netscape Corporation (liveScript)
-   JavaScript programs run by an interpreter build into the user web browser
-   It is a case-sensitive language.
-   JavaScript in not JAVA.

### What can JavaScript do ?
-   It can dynamically modify an HTML page.
-   It can validate user input.
-   It can be used to create cookies. 
-   It is a full-featured programming language.
-   JavaScript user interaction does not require any communication at the user.

### What make JavaScript Unique ?
-   Support by all major browsers and enable by default.
-   Complex things are done simply.
-   Full integration with HTML/CSS.

### JavaScript Frameworks and Libraries ?
-   Angular
-   React
-   jQuery
-   Vue.js
-   Node.js  etc....

## Variables:-
**Variable define:** A named reference to a value is a variable.
```js
var a = "some value"; // functional or global scoped
let b = "some value"; // block scoped
const c = "some value"; // block scoped + cannot get new value
```

## Seven (7) types of Primitive Datatype:- 
**[nn bb ss u]**: 
```js
let id = 123.45                       // number
let id = null                         // null
let id = true                         // boolean
let id = BigInt("549") + BigInt("4")  // bigint,  // 553n
let id = Symbol("Adarsh verma")       // symbol,  // Symbol(Adarsh verma)
let id = "two"                        // string,
let id = undefined                    // undefined(any)
```
## Object in JavaScript. 
An object is a data type in JavaScript that is used to store
a combination of data in a simple key-value pair. Thats it.
-   `Key`: These are the keys in user object.
-   `Value`: These are the values of the respective keys in user object.
-   `Method`: If a key has a function as a value, its called
a method.
-   **Example:** 'name' is `key`, 'Adarsh' is `value` and 'function' is `method`.

```js
var array = ['html', 34, 'css', 'js'];  // object
const item = {
    'name':'Adarsh',
    'adarsh':false,
    'lovish':67,
    calculateAge: function(){
        // some code here..
    }
};
```

### Outputting the Data:  *(Use console)*
-   alert()             = a small pop up window (alert box)
-   prompt()            = Prompt for user input
-   confirm()           = yes/no and return true/false based on user click   
-   console.log()       = Mainly used for debugging, used in console massage
-   document.write()    = Write output on HTML page.

## Function in JavaScript:
*A group of tasks can be performed in a single function.*
```js
// normal function to create
function add(a, b){
    // code             
}
// good practices to function create
const add = (a, b) => {
    // code             
}
```

## Condition Statement in JavaScript:
Condition Statement are used to perform different action based on different condition.
1. **if..else statement:**
In JavaScript we have three form of if...else condition
   1.  if statement
   2.  if...else statement
   3.  if...else if...else statement
```js
if ((age>=14) && (age<19)){    // logic
    staus = "Eligible";        // condition True
} else{
    staus = "Not Eligible";    // condition False 
}
```
2. **Switch statement:**
```js
switch (new Date().getDay()) {   // input is current date
    case 6:     // if(day==6)
        text = "Saturday";
        break;  // condition true to exit loop. 
    
    case 0:     // if(day==0)
        text = "Sunday";
        continue;  // condition true then check next iteration
    
    case 2:     // if(day==2)
        text = "Tuesday";
        break;
    
    default:    // else... all false condition 
        text = "whate'er";
}
```
3. **Tenary Operator:**
```js
// Syntax: (condition) ? exp1-True : exp2-False;
let a = 15;
console.log('You can', a<18? "not drive": "Drive")  // You can not drive 
```
## Loops In JavaScript:
**Type of loops in JavaScript:**
|Sr.  | Type | How Runs |
|:----|:-----|:---------|
|1.   | for loop  | loop a block of code number of times.|
|2.   | for-in loop | loops through the `key` of an object.|
|3.   | for-of loop | loops through the `value` of an object.|
|4.   | while loop | loop a block based on a special condition.|
|5.   | do..while loop | similar while loop variant which run at least once.|

### for loop:
```js
// normal loop:
for( int i=0; i<num.length; i++){
    // code
}
// forEach loop:    
let a = num.forEach((element) => {
    // code
});

// for-in loop:  
for(let key in object) {   // This loops also work with arrays.
    // code to be execute
}
// for-of loop: 
for(let key of inerrable) {      // inerrable data structure like array, string etc..  
    // code to be execute
}
```
### while loop: 
***Note: If the condition never become false, the loop will never end and its might crash the runtime.***
```js
while(condition){
    // code to be executed
    update;
}
```
### do..while loop: 
***Note: Execute at least once.***
```js
do {
    // code to be executed
    update;
} while (condition);
```
## String n JavaScript:
```js
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters
abc.slice(3, 6);                // cuts out "def", negative values count from behind
128.toString(16);               // number to hex(16), octal (8) or binary (2)
abc.substring(0,5);             // gives 'abcde' s=0 e=5 extracts a part of a string 
abc.substr(0,5);                // gives 'abcde' s=0 e=5 extracts a part of a string 
abc.trim();                     // removes whitespace from both sides of a string 
abc.replace("abc","123");       // find and replace, takes regular expressions
abc.concat(" ", str2);          // abc + " " + str2
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno");        // last occurrence
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99

String Interpolation:
let firstName = "John";
let lastName = "Doe";
let name = $"My full name is: {firstName} {lastName}";  // My full name is: John Doe
```
## Array:
***Array are variables which can hold more than one value with different DataType.***
```js
dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
dogs.pop();                             // remove last element
dogs.push("Chihuahua");                 // add new element to the end
dogs[dogs.length] = "Chihuahua";        // the same as push
dogs.shift();                           // remove first element
dogs.unshift("Chihuahua");              // add new element to the beginning
delete dogs[0];                         // change element to undefined (not recommended)
dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
var animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
dogs.slice(1,4);                        // elements from [1] to [4-1]
dogs.sort();                            // sort string alphabetically
dogs.reverse();                         // sort string in descending order
x.sort(function(a, b){return a - b});   // numeric sort
x.sort(function(a, b){return b - a});   // numeric descending sort
highest = x[0];                         // first item in sorted array is the lowest (or highest) value
x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort
```

### Map method:- 
***Create a new array by performing some operation on each array element.***
```js
let a = arr.map( (value, index, arr) =>{
    console.log("first :", value, index, arr)
    return value + 1 
});
console.log("second:", a)   // second: [ 46, 37, 81 ]
```
### filter method:-  
***Create a new array by operation true then filter the value, & original array not change.***  
```js
let arr2 = [45,36,80,0,3,5]
let b = arr2.filter( (a) => {
    return a < 10
});
console.log(b)  // [ 0, 3, 5 ]
```
### Reduce method:- 
***Reduce an array to a single value return.***
```js
let arr3 = [1,2,3,4,5]   // a=1 b=2 return 3, a=3 b=3 return 6, a=6 b=4 return 10.... 15
let c = arr3.reduce( (a, b) => {
    return a+b 
})
console.log(c)  // 15
```

### Practices Question:
1. Add number in given array ?
2. Add number n to zero in given array ?
3. Filter for number divisible by 10 from a given array ?
4. Create an array of square of given number ? 
5. Use reduce to calculate factorial of a given number from from an array of first n natural number.[n bring number whose factorial needs to be calculated]
6. Write a program Enter your guess number 1 to 100 ?

#### Advantages of Separate Script file
1. Separation of concerns
2. Browser cashing.
3. Developer tools: Element, Console, Network

## Console Object Methods:
```js
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
```

## Window: DOM , BOM & Object (JavaScript core)
```js
window.console.log(window)
console.log(document.body)
```
* **DOM (Document Object Model):** DOM represent the page contact HTML
```js
document.body  // page body as Js. object   
document.body.style.background="red" // change page background to red
```
* **BOM (Browser Object Model):** It is represent additional object provided by the browser(host environment) for working with everything except the document. The function `alert`/`confirm`/`prompt` are also a part of `BOM`.
```js
location.href = "https://google.com"  // redirect to another URL.
```
# javaScript Importance Notes:

<<<<<<< HEAD
## Parents and siblings of an Element:
```js
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
```
## Element Navigation:
```js
let a = document.body
=======
**DOM - Document Object Model:**
```javascript
// Query/Get Elements

    // Preferred way:
    document.querySelector('css-selectors')
    document.querySelectorAll('css-selectors', ...)

    // Old ways, and still work:
    document.getElementsByTagName('element-name')
    document.getElementsByClassName('class-name')
    document.getElementById('id')

// Create / clone Element
document.createElement('div')
document.createTextNode('some text here')
node.cloneNode()
node.textContent = 'some text here'

// Modify Element
node.style.color = 'red'
node.style.padding = '10px',
node.style.fontSize = '200%'
node.setAttribute('attr-name', 'attr-value')
node.removeAttribute('attr-name')

//Get and Modify Element Class
node.classList
node.classList.add('class-name', ...)
node.classList.remove('class-name', ...)
node.classList.toggle('class-name')
node.classList.contains('class-name')
node.classList.replace('old', 'new')

// Add node to document
parentNode.appendChild(nodeToAdd)
parentNode.insertBefore(nodeToAdd, childNode)

//Remove Node
parentNode.removeChild(nodeToRemove)
// Hack to remove self
nodeToRemove.parentNode.removeChild(nodeToRemove)

// Get Element Details
node.nextSibling
node.firstChild
node.lastChild
node.parentNode
node.childNodes
node.children

// Events
node.addEventListener('event-name', callback-function)
node.removeEventListener('event-name', callback-function)
```

## What is a "Node"? (in the context of DOM)

**Node:** Every item in the DOM tree is called a node. There are two types of node - A text node, and an element node:

-   **Text Node:** Node that has text.

-   **Element Node:** Node that has an element.

-   **Child Node:** A node which is a child of another node.

-   **Parent Node:** A node which has one or more child.
>>>>>>> f0b72cd3da4c87bdf2260231874c96d6a0b7b233

-   **Descendent Node:** A node which is nested deep in the tree.

-   **Sibling Node:** A node that share the same parent node.