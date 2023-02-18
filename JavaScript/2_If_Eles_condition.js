// "Use console" If else condtions:

a = prompt("hey how are you?");
a = Number.parseFloat(a) // converting the string to a number
console.log(a)
if(a<0){
    alert("This is note a age");
}
else if(a<=9){
    alert('hey are you kids')
}
else if(a>9 || a<60){
    alert('hey are you kids')
}
else {
    alert('This is invalid age !')
}

// Tunary Operators:
console.log('You can', a<18? "not drive": "Drive")

