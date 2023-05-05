/* 
  - Inheritance: old Phone create a new smart phone.
  - Polymorphism: cellPhone is camera, cellPhone is a Notepad 
  - Abstraction: Hiding of internal detail.
  - Encapsulation: Multiple object combine of one object.
*/
// Prototype Inheritance:

let a = {
  name: 'adarsh',
  Language: 'Javascript'
};
console.log(a);

let p = {
  run: ()=> {
    console.log('run');
  }
}
a.__proto__= p
a.run()

a.__proto__ = {
  name1:'jack'
}
