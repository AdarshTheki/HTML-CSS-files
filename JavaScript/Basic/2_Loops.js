// JavaScript :-  Loops

// for Loops:-
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n)
for(let i=0; i<n; i++){
    sum +=(i+1) 
}
console.log("Sun of first "+n+" Natureal Number is "+sum)

let item = {
    'harry':true,
    'adarsh':false,
    'lovish':67,
    'rohan':undefined
}
// for in loop:-
for (let a in item){
    console.log("items "+ a +" are "+item[a])
}
// for of loop;-
for (let b of "harry"){
    console.log("harry "+b)
}

// while loops:-
n = prompt("Enter the value of n");
n = Number.parseInt(n)
let i=0
while (n>i) {
    console.log("Sun of first "+i+" Natural Number is "+n)
    i++;
}

// Do while loops:- ( at least one time run condition fail)
n = prompt("Enter the value of n");
n = Number.parseInt(n)
i=5
do{
    console.log("Sun of first "+i+" Natural Number is "+n)
    i++;
}while (n>i)



