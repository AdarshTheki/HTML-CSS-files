/* JavaScript :- 
Function – A group of tasks can be performed in a single function

function add(a, b){
    // code
}

const add = (a, b) => {
    // code
}
*/
// Normal Function Use:-
function onePlus(x,y){
    console.log("Done")
    return 1 + (x+y)/2
}
let a=1, b=2, c=3;
console.log("One Plus",a,"and",b,"is", onePlus(a,b))
console.log("One Plus",b,"and",c,"is", onePlus(b,c))
console.log("One Plus",a,"and",c,"is", onePlus(a,c))

// Arrow Function Use:- (important)
const hello=()=>{
    console.log("Hey how are you?")
    return "hi"
}
let v = hello();
console.log(v)

const sum=(a,b)=>{
    console.log("Hey how are you?")
    return a+b
}
a = 10, b = 20;
console.log(sum(a,b))


