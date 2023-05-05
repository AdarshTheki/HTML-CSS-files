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

## Windows: DOM, BOM & Object (JavaScript core)

* **Document Object Model:** `DOM` represent the page contact HTML
```js
document.body  // page body as Js. object   
document.body.style.background="red" // change page background to red
```
* **Browser Object Model:** `BOM` is represent additional object provided by the browser(host environment) for working with everything except the document. The function `alert`/`confirm`/`prompt` are also a part of `BOM`.
```js
window.console.log(window)
console.log(document.body)

location.href = "https://google.com"  // redirect to another URL.
```
# Importance Notes:

```javascript
// Parents and siblings of an Element:
document.body.firstChild;
document.body.lastChild;
document.body.childNodes;

// Element Navigation:

// Preferred way:- Query Element
document.querySelector('css-selectors')
document.querySelectorAll('css-selectors', ...)

// Old ways:  Get Element
document.getElementsByTagName('element-name')
document.getElementsByClassName('class-name')
document.getElementById('id')

// table navigation:
node.rows
node.rows[0]
node.caption
node.tFoot
node.tHead.firstElementChild
node.tBodies
node.rows[0],rowIndex

// Create / clone Element
document.createElement('div')
document.createTextNode('some text here')
node.cloneNode()
node.textContent = 'some text here'

// Modify Element style
node.style.color = 'red'
node.style.padding = '10px',
node.style.fontSize = '200%'

node.hasAttribute('class')  // check class
node.getAttribute('class')  // get class
node.setAttribute('name', 'value')  
node.removeAttribute('attr-name')

node.matches('') // check element if match the given css selector
node.closes("") // to look nearest ancestor that matches the given css-selector and also element itself check
node.contain("") // "element_B is inside element_A OR element_A==element_B" is true return.

// Get and Modify Classes
node.classList.add('class-name', ...)
node.classList.remove('class-name', ...)
node.classList.toggle('class-name')
node.classList.contains('class-name')
node.classList.replace('old', 'new')

// Add node to document
parentNode.appendChild(nodeToAdd)
parentNode.insertBefore(nodeToAdd, childNode)

// Remove Node
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

// InsertAdjacentHTML / text / Element:-

<body>
   <div id="first">I am Adarsh Verma</div>
</body>
<script>
first.insertAdjacentHTML('beforebegin','<div class="test">before-begin</div>');
first.insertAdjacentHTML('beforeend','<div class="test">before-end</div>');
first.insertAdjacentHTML('afterbegin','<div class="test">after-begin</div>');
first.insertAdjacentHTML('afterend','<div class="test">after-end</div>');
</script>

```
### Node:
"Every item in the DOM tree is called a node." There are two types of node - 
`Text Node`, and `Element Node`:

-   **Text Node:** Node that has text.
-   **Element Node:** Node that has an element.
-   **Child Node:** A node which is a child of another node.
-   **Parent Node:** A node which has one or more child.
-   **Descendent Node:** A node which is nested deep in the tree.
-   **Sibling Node:** A node that share the same parent node.

## DOM Manipulation:
In JavaScript, the global `document` object represents the DOM for the current web page. You can use the `document` object to manipulate the content and structure of the page, as well as to respond to user actions such as clicks and key presses.

Here are some common tasks you can do with the DOM in JavaScript:

1. **Accessing elements:** You can use the `getElementsByClassName`, `getElementById` method to access an element with a specific ID, or the `querySelector` method to access an element using a CSS selector. For example:
```js
const element = document.getElementById('my-element');
const elements = document.querySelectorAll('.my-class');
```
2.  **Modifying content:** You can use the `innerHTML` property to set the HTML content of an element, or the `textContent` property to set the text content. For example:
```js
element.innerHTML = '<strong>Hello, world!</strong>';
element.textContent = 'Hello, world!';
```
3.  **Modifying attributes:** You can use the getAttribute and setAttribute methods to get and set attributes of an element. For example:
```js
const src = element.getAttribute('src');
element.setAttribute('src', 'new-image.png');
```
4.  **Adding and removing classes:** You can add or remove classes from an element using its `classList` property. The `classList` property is an object that provides methods for adding, removing, and toggling classes. For example:
```js
myElement.classList.add('myClass');
myElement.classList.remove('myClass');
myElement.classList.toggle('myClass');
```

5.  **Responding to events:** You can use the `addEventListener` method to add an event listener to an element, and respond to user actions such as clicks and key presses. For example:
```js
element.addEventListener('click', (event) => {
  console.log('Element clicked!');
});
```
6.  **Manipulating the DOM:** You can create new nodes using the `createElement` method, and add them to the DOM using methods such as `appendChild` and `insertBefore`. You can also remove nodes using the removeChild method.
```js
// Find the body element
const body = document.querySelector('body');

// Create a new element
const newElement = document.createElement('div');
newElement.textContent = 'Hello, world!';

// Add the new element to the body
body.appendChild(newElement);
```
In this example, we find the `body` element using the `querySelector` method, create a new div element using the `createElement` method, set its text content using the `textContent` property, and add it to the body using the `appendChild` method.

## The Event Loop in JavaScript
The event loop is a fundamental concept in JavaScript that allows you to write asynchronous code that is non-blocking and responsive. It is responsible for executing tasks in the order in which they are queued, and for ensuring that the UI remains responsive even when long-running tasks are executing.

Here is an example of how the event loop works with `setTimeout`:
```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");
```

In this code, the `console.log` statements are synchronous and are executed immediately. The `setTimeout` functions are asynchronous and are scheduled to be executed later. When the event loop detects that there are no more synchronous tasks to execute, it picks the first `setTimeout` task from the queue and executes it. It then repeats the process until all the tasks have been executed.

The output of this code will be:
```js
Start
End
Timeout 1
Timeout 2
```

Note that even though both `setTimeout` functions have a delay of 0 milliseconds, they are still executed asynchronously and are scheduled to be executed after all the synchronous code has been executed.

### addEventListener:
```js
function myFunction(){
   alert('Add Event Listener')
}
const event = document.getElementById('btn');
event.addEventListener('click', myFunction)
```
## CallBack Function:
A callback function is a function that is passed as an argument to another function, and is called by that function when a certain event occurs or when a certain condition is met. Callback functions are commonly used in asynchronous programming, where one function needs to wait for another function to complete before continuing.

Here is an example of using a callback function in JavaScript:
```js
function add(a, b, callback) {
    setTimeout(() => {
        let result = a + b;
        callback(result);
    }, 2000);
}

add(2, 3, (result) => {
    console.log(result);
});
```

In this code, the `add` function takes two numbers `a` and `b` as well as a callback function. The `setTimeout` function is used to simulate an asynchronous delay of 2 seconds before the callback function is called with the result of the addition. Finally, the `add` function is called with the numbers `2` and `3`, as well as an anonymous function that logs the result to the console.

## Promise
A promise is an object that represents a value that may not be available yet, but will be at some point in the future. Promises are commonly used when working with asynchronous code like fetching data from a server or performing animations. Promises have three states: `pending`, `fulfilled`, and `rejected`.

Here is an example of using a promise in JavaScript:

```js
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let result = Math.random();
        if (result > 0.5) {
            resolve(result);
        } else {
            reject("Error: Number too small");
        }
    }, 2000);
});
// call the Promise
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});
```

In this code, a new `Promise` object is created that simulates a random delay of 2 seconds before resolving with a random number between 0 and 1. If the random number is less than or equal to 0.5, the promise is rejected with an error message. The `then` method is used to handle the fulfilled state of the promise, and the `catch` method is used to handle the rejected state.

## Async/Await
Async/await is a more recent addition to JavaScript that allows you to write asynchronous code in a synchronous style. Async/await is built on top of promises and provides a way to wait for promises to resolve or reject before continuing execution.

Here is an example of using async/await in JavaScript:

```js
async function fetchUserData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
}

fetchUserData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});
```

In this code, the `fetchUserData` function is defined as an async function that uses the `await` keyword to wait for the response from a remote API before parsing it as JSON and returning the data. The function is then called using the `then` and `catch` methods to handle the fulfilled and rejected states respectively.

## Try/Catch/Finally
Try/catch/finally is a way to handle errors and exceptions in JavaScript. The `try` block contains the code that may throw an error or exception, the `catch` block contains the code that handles the error or exception, and the `finally` block contains code that is executed regardless of whether an error or exception is thrown.

Here is an example of using try/catch/finally in JavaScript

## Fetch API:
The Fetch API is a JavaScript interface that provides a way to make HTTP requests from within a web browser. With the Fetch API, you can fetch resources such as JSON data, images, and other files from servers using the HTTP protocol. The Fetch API provides a simple and intuitive way to make asynchronous requests and handle responses.

Here's an example of making a `POST` request with a JSON payload:
```js
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
In this example, we're setting the `method` option to 'POST', and passing a JSON payload in the body option using the `JSON.stringify()` method. We're also setting the `Content-Type` header to 'application/json'.

## LocalStorage and SessionStorage:
Local storage and session storage are two web storage APIs that allow you to store data in a user's web browser. Both APIs provide a simple key-value storage mechanism and are widely used in web development to store and retrieve data.

The main difference between local storage and session storage is that local storage persists data across browser sessions, while session storage only persists data within a single browser session.
```js
// Set data in localStorage and sessionStorage
localStorage.setItem("name", "John Doe");
sessionStorage.setItem("name1", "John Doe1");
// Get data from local storage
let name = localStorage.getItem("name");
let name = sessionStorage.getItem("name1");
```
Both local storage and session storage support the same methods for setting, getting, and removing data. Here's a list of some common methods:

- `setItem(key, value):` Sets the value for the given key in storage.
- `getItem(key):` Gets the value for the given key in storage.
- `removeItem(key):` Removes the item with the given key from storage.
- `clear():` Removes all items from storage.

