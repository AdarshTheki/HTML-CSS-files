<h1 align="center"> Basic JavaScript </h1> 

## Basic:

variable define: let, var, const
```js
let a = null;
let b = 345;
let c = true;
let d = BigInt("549") + BigInt("4")
let e = 'Harry'
let f = Symbol("I am a Adarsh Verma")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof a, typeof b,  typeof c,  typeof d,  typeof e, typeof f,  typeof g)
/* Output:
null 345 true 553n Harry Symbol(I am a Adarsh Verma) undefined  */
```

**Object is JavaScript** - *[not Dictionary]*
```js
const item = {
    'harry':true,
    'adarsh':false,
    'lovish':67,
    'rohan':undefined };
console.log(item['harry'])
```
## Loops:
```js
    let item = {
        'harry':true,
        'adarsh':false,
        'lovish':67,
        'rohan':undefined   };
```
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