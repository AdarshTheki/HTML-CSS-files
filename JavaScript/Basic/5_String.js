// JavaScript :- Strings

let nam = "Adarsh verma"
console.log(nam.length, nam)     
console.log(nam.slice(2), nam)
console.log(nam.substring(0,2), nam)
console.log(nam.substr(2,3), nam)
console.log(nam.trim(), nam)
console.log(nam.split("-"), nam)

// Tanplate literals ( string Interpolation)
let boy = 'ayush'
let girl = 'Miss.devi'
let sentance = `${boy} is a friend of ${girl}`
console.log(sentance)       // ayush is a friend of Miss.devi  
/* 
Escape sequence characters
\' Single quote
\" Double quote
\\ Single backslash
\b Backspace
\f Form feed
\n New line
\t Horizontal tab
\v Vertical tab
\r Carriage return
*/
let fruit = "bana\'na"
console.log(fruit)          // bana'na


// Practice:

// Ex-1. How many Strings are: Adarsh\"Ver
let str = "Adarsh\"Ver"
console.log(str, str.length)

// Ex-2. MDM javaScript:
const s = 'The quick brown fox jumps over the lazy dog.'
const word1 = 'fox2'
console.log(s.includes(word1))
console.log(`The word "${word1}" "${s.includes(word1) ? 'is' : 'is not'}" in the sentance`);
const word2 = 'fox'
console.log(s.includes(word2))
console.log(`The word ${word2} ${s.includes(word2) ? 'is' : 'is not'} in the sentance`);

// Ex-3. lower or upper case
console.log(s.toUpperCase())
console.log(s.toLowerCase())

// Ex-4. string to number in slicer
let str2 = "please give rs.1000"
let amount = Number.parseInt(str2.slice(15))
console.log(str2, amount)

// Ex-5.
let names = "Adarsh"
let friend = 'Naman'
console.log(names.concat(" is a friend of ", friend, " OK!"))