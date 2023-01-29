<h1 align="center"> Advance JavaScript </h1> 



### What is JavaScript ?
-   Is an interpreted, clint-side, event-base, object-oriented scripting language.
-   It is invented in 1995 at Netscape Corporation (liveScript)
-   Javascript programs run by an interpriter build into the user web browser
-   It is a case-sensitive language.
-   JavaScript in not JAVA.

### What can Javascript do ?
-   It can dynamtically modify an HTML page.
-   It can validate user input.
-   It can be used to create cookies. 
-   It is a full-featured programming language.
-   Javascript user iteraction does not requre any communication at the user.

### What make JavaScript Unique ?
-   Support by all major browsers and enable by deafult.
-   Complex things are done simply.
-   Full integration with HTML/CSS.

### JavaScript FrameWorks and Libraries ?
-   Angular
-   React
-   jQuery
-   Vue.js
-   Node.js  etc....

## Variables:-
```js
variable_define: let, var, const
var = 'most widely used(reassigned) avoid this.'
let = 'can be decleard block of code{} reassigned otherwise cannot  be ressinged.' 
const = 'cannot be reassigned.'
```
## 'Seven' type of Primitive DataType:- *[nn bb ss u]*
```js
let id = 20                           // number
let id = null                         // null
let id = true                         // boolean
let id = BigInt("549") + BigInt("4")  // bigint,  // 553n
let id = Symbol("Adarsh verma")       // symbol,  // Symbol(Adarsh verma)
let id = "two"                        // string,
let id = undefined                    // any,
```
**Object in JavaScript.** - [*not Dictionary]*
```js
const item = {
    'name':'Adarsh',
    'adarsh':false,
    'lovish':67,
    'rohan':undefined }
```
### Outputting the Data:  *(Use console)*
-   alert()             = a small pop up window (alert box)
-   prompt()            = Prompt for user input
-   confirm()           = yes/no and return true/false based on user click   
-   console.log()       = Mainly used for debugging
-   document.write()    = Write output

## Function:
*A group of tasks can be performed in a single function.*
```js
// normal function to create
function add(a, b){
    // code             
}
// good practies to function create
const add = (a, b) => {
    // code             
}
```
### DOM Function:
```js
document.getElementById()
document.getElementByClassName()
innerHTML()
```
### Intreduce Loops:
- **for in loop:**
```js
for (let a in item){
    console.log("items "+ a +" are "+ item[a])
}
```
- **while loops:**
```js
n = prompt("Enter the value of n");
n = Number.parseInt(n);
let i=0;
while (n>i) {
    console.log("Sun of first"+ i +"Natural Number is"+ n)
    i++;
}
```
- **Do while loops:** - *At least one time run condition fail.*
```js
n = prompt("Enter the value of n");
n = Number.parseInt(n);
i=5
do{
    console.log("Sun of first "+ i +" Natural Number is "+ n)
    i++;
}while (n>i)
```