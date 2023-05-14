## What is JavaScript and it's Features  
- **What is JavaScript ?**
  - Is an interpreted, client-side, event-base, object-oriented scripting language.
  - It is invented in 1995 at Netscape Corporation (liveScript)
  - JavaScript programs run by an interpreter build into the user web browser
  - It is a case-sensitive language.
  - JavaScript in not JAVA.

- **What can JavaScript do ?**
  - It can dynamically modify an HTML page.
  - It can validate user input.
  - It can be used to create cookies. 
  - It is a full-featured programming language.
  - JavaScript user interaction does not require any communication at the user.

- **What make JavaScript Unique ?**
  - Support by all major browsers and enable by default.
  - Complex things are done simply.
  - Full integration with HTML/CSS.
  - **Frameworks and Libraries:** Angular, React, jQuery, Vue.js, Node.js etc.

 ## Data types and Variables
- `Variables`: A named reference to a value is a variable.
```js
var a = "some value"; // functional or global scoped
let b = "some value"; // block scoped
const c = "some value"; // block scoped + cannot get new value
```

- `Datatype`: JavaScript also allows developers to create their own custom data types using classes and prototypes.
  - **Primitive DataType**: 

    ``` String, Number, Boolean, Null, Undefine, Symbol ```

  - **Object DataType:**

    ``` Array, Map, Set, Date, Regular Expression ```

  **Object in JavaScript**: An object is a `Data Type` in JavaScript that is used to store
a combination of data in a simple `key-value` pair. Thats it.
  - `Key`: These are the keys in user object.
  - `Value`: These are the values of the respective keys in user object.
  - `Method`: If a key has a function as a value, its called
a method.
  -  **Example:** name: is `key` 'Adarsh' is `value` and 'function' is `method`.

## Function in JavaScript:
  - **Function:** *A group of tasks can be performed in a single function.*
    ```js
      function add(a, b){ 
        // normal function to create             
      }
      const add = (a, b) => { 
        // good practices to Arrow function create
      }
    ```
  - **IIFE (Immediately Invoked Function Expression)** 
  
    The purpose of an IIFE is to create a new scope for the function, preventing variables declared inside it from polluting the global scope.
    ```js 
      (function() {
        // This code is executed immediately
        var x = 10;
        console.log(x);
      })();
    ```
  - **Higher-Order Function:** 

    higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. This means that the function operates on functions, either by taking them as arguments or by returning them.
    ```js
    function createCounter() {
      let count = 0;
      return function() {
        count++;
        console.log(count);
      };
    }
    const counter = createCounter();
    counter(); // logs 1
    counter(); // logs 2
    counter(); // logs 3
    ```

  - **Callback functions**:
  
    Callback functions are often used in JavaScript for handling `asynchronous` events such as `HTTP requests`, `user input`, and `timers`. They allow us to write asynchronous code that executes in response to events, without blocking the execution of other code.
    `Define`: *A function that is passed as an argument to another function and is executed inside that function.*
    ```js
      function processUserInput(callback) {
        var name = prompt('Please enter your name:');
        callback(name);
      }
      function greetUser(name) {
        console.log('Hello, ' + name);
      }
      processUserInput(greetUser);
    ```

## Prototype
objects can inherit properties and methods from other objects through a mechanism called the `prototype chain`. Each object has an internal property called `[[Prototype]]` (also referred to as `__proto__`) which points to another object, known as its `prototype`.
```js
let animal = { eats: true };
let rabbit = { jumps: true };
rabbit.__proto__ = animal;
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true
```

##  Comparison Operators '==' and '==='
- `==` is called the "loose equality" or "abstract equality" operator. It compares values by converting them to a common type
  ```js
  console.log(5 == "5"); // true
  console.log(null == undefined); // true
  ```
- `===` is called the "strict equality" or "identity" operator. It compares values by checking if they have the same type and value.
  ```js
  console.log(5 === "5"); // false
  console.log(null === undefined); // false
  ```
## Difference between null and undefined
- `undefined` is a value that is automatically assigned to a variable that has been declared but not initialized with a value.
- `null`, on the other hand, is a value that represents the intentional absence of any object value.
  ```js
  let x;
  console.log(x); // undefined
  let y = null;
  console.log(y); // null
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
3. **Ternary Operator:**
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


- For Loop:
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
      for(let key in object) {      
          // This loops also work with arrays.
      }
    // for-of loop: 
      for(let key of inerrable) {     
          // inerrable data structure like array, string etc..
      }
    ```
- **While loop:** *If the condition never become false, the loop will never end and its might crash the runtime.*
    ```js
    while(condition){
        // code to be executed
        update;
    }
    ```
- **Do..while loop:** *Note: Execute at least once.*
    ```js
    do {
        // code to be executed
        update;
    } while (condition);
    ```
## String method in JavaScript:
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

// String Interpolation:
let firstName = "John";
let lastName = "Doe";
let name = $"My full name is: {firstName} {lastName}";  // My full name is: John Doe
```
## Array method is javascript:
*Array are variables which can hold more than one value with different DataType.*
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

## map, filter and reduce method:- 
- **map method:-** *Create a new array by performing some operation on each array element.*
    ```js
    const array = [1, 2, 3, 4];
    const mappedArray = array.map((element) => {
      return element * 2;
    });
    console.log(mappedArray); // Output: [2, 4, 6, 8]
    ```
- **filter method:-** *Create a new array by operation true then filter the value, & original array not change.*  
    ```js
    const array = [1, 2, 3, 4];
    const filteredArray = array.filter((element) => {
      return element % 2 === 0;
    });
    console.log(filteredArray); // Output: [2, 4]
    ```
- **reduce method:-** *Reduce an array to a single value return.*
    ```js
    const array = [1, 2, 3, 4];
    const sum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    console.log(sum); // Output: 10
    ```

## Use Console
- **Console Object Methods:**
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
- **Outputting the Data:**  
    - alert()             = a small pop up window (alert box)
    - prompt()            = Prompt for user input
    - confirm()           = yes/no and return true/false based on user click   
    - console.log()       = Mainly used for debugging, used in console massage
    - document.write()    = Write output on HTML page.

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
* **Importance Notes:**
    ```javascript
    // Create / clone Element
    document.createElement('div')
    document.createTextNode('some text here')
    node.cloneNode()
    node.textContent = 'some text here'
    
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
    element.insertAdjacentHTML('beforebegin','<div class="test">before-begin</div>');
    element.insertAdjacentHTML('beforeend','<div class="test">before-end</div>');
    element.insertAdjacentHTML('afterbegin','<div class="test">after-begin</div>');
    element.insertAdjacentHTML('afterend','<div class="test">after-end</div>');
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
node.hasAttribute('class')  // check class
node.getAttribute('class')  // get class
node.setAttribute('name', 'value')  
node.removeAttribute('attr-name')
node.matches('')
node.closes("") // to look nearest ancestor
node.contain("") // "element_B is inside element_A OR element_A==element_B" is true return.

const src = element.getAttribute('src');
element.setAttribute('src', 'new-image.png');
```
4.  **Adding and removing classes:** You can add or remove classes from an element using its `classList` property. The `classList` property is an object that provides methods for adding, removing, and toggling classes. For example:
```js
myElement.classList.add('myClass');
myElement.classList.remove('myClass');
myElement.classList.toggle('myClass');
myElement.classList.contain('myClass'); // true/false Return
myElement.classList.replace('OldClass', 'NewClass');
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
```js
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
} finally{
  // Code to handle the both casease.
}
```

## Error Objects
JavaScript provides several built-in error objects that can be used to represent different types of errors, such as `Error`, `TypeError`, and `RangeError`. Here's an example:
```js
function validateInput(input) {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (input.length < 5) {
    throw new RangeError('Input must be at least 5 characters long');
  }
}

try {
  validateInput(123);
} catch (error) {
  console.log(error.message);
}
```
In this example, the `validateInput` function checks if the input is a string and if it has at least 5 characters, and throws a `TypeError` or `RangeError` if the input is invalid. The `try` block calls the `validateInput` function with the argument 123, which throws a `TypeError`. The `catch` block catches the error and logs its message to the console.


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


## Scope in JavaScript
Scope refers to the visibility and accessibility of variables and functions in different parts of a JavaScript program. In JavaScript, there are two types of scope: global scope and local scope.

Global scope refers to variables and functions that are defined outside of any function, and can be accessed from anywhere in the program. Local scope refers to variables and functions that are defined within a function, and can only be accessed from within that function.
```js
var globalVariable = 'I am a global variable';

function myFunction() {
  var localVariable = 'I am a local variable';
  console.log(globalVariable);
  console.log(localVariable);
}

myFunction(); // logs 'I am a global variable' and 'I am a local variable'
console.log(globalVariable); // logs 'I am a global variable'
console.log(localVariable); // ReferenceError: localVariable is not defined
```
In this example, `globalVariable` is defined outside of any function, and can be accessed from anywhere in the program. `localVariable` is defined within the `myFunction` function, and can only be accessed from within that function. When we call `myFunction`, we can access both `globalVariable` and `localVariable`. However, when we try to access `localVariable` outside of the function, we get a `ReferenceError` because it is not defined in the global scope.

## Closures in JavaScript
A closure is a function that has access to variables in its outer (enclosing) function's scope chain, even after the outer function has returned. Closures allow you to create functions that can access and modify variables that are not directly accessible from outside the function.
```js
function outerFunction() {
  var outerVariable = 'I am in the outer function';
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
var innerFunc = outerFunction();
innerFunc(); // logs 'I am in the outer function'
```
In this example, `outerFunction` returns `innerFunction`, which has access to the `outerVariable` variable, even after `outerFunction` has returned. When we call `innerFunc`, it logs the value of `outerVariable`.

Closures are often used to create private variables and functions in JavaScript. By using closures, you can create functions that have access to private variables and functions that are not accessible from outside the function.

## Object-Oriented Programming 
`Object-Oriented Programming` is a programming paradigm that emphasizes the use of objects to represent and manipulate data. JavaScript is a flexible language that supports multiple programming paradigms, including OOP.
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  }
}
let person = new Person("John", 30);
```
JavaScript also supports class-based OOP using the `class` keyword.
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
}
let person = new Person("John", 30);
```


# Modules and Bundlers
In ES6, the most common way to create a module is by using the `export` and `import` statements. For example, you can export a function from a module like this:
```js
// greet.js
export function greet(name) {
  console.log(`Hello, ${name}!`);
}
// app.js 
import { greet } from './greet.js';
greet('John');

```
Bundlers are tools that help you package your JavaScript code and its dependencies into a single file or a set of files that can be served to the browser. Bundlers typically work by analyzing your code and its dependencies and creating a dependency graph, which allows them to determine the order in which the code should be executed.

The most popular bundlers in the JavaScript ecosystem are Webpack, Rollup, and Parcel. They all have different features and capabilities, but they all essentially do the same thing: take your code, bundle it, and output it in a format that can be understood by the browser.
