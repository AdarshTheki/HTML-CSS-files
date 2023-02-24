/**
 * ! Create Promise
**/
let p = new Promise(function(resolve, reject){
   console.log('Hello')
   resolve(5)
})
console.log('Hello One');
// Do some Async task 
setTimeout(function(){
   console.log("Hello Two in 2 second");
}, 2000)

console.log(p);
console.log('Hello Three');

