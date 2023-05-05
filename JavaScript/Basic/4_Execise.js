// JavaScript :- Execise

// Problem No.1: Print Objects and each items
let marks = {
    harry:60,
    adarsh:90,
    ayush:70,
    ankita:60
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("Marks",Object.keys(marks)[i]+ " are "+marks[Object.keys(marks)[i]])
}

for (let key in marks){
    console.log("Marks",key,"are",marks[key])
}


// Problem no.2:
let a = 43
let i
while(i != a){
    i = prompt("enter the number")
    console.log("Try again!")
}
console.log("You Have Enter The Correct Number")


// Proble No.3: Find Three Number Mean?
const mean = (a,b,c) => {
    return (a+b+c)/3
}
console.log(mean(4,5,6))


