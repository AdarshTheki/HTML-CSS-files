class Employee {
  logIn() {
    console.log(`Employee has Logged In`);
  }
  logOut() {
    console.log(`Employee has Logged Out`);
  }
  requestLeaves(Leave) {
    console.log(`Employee has request ${Leave} Leaves`);
  }
}
class Programming extends Employee {
  requestCoffee(x) {
    console.log(`Employee has request ${x} coffee.`);
  }
  requestLeaves(Leave) {
    super.requestLeaves(4)
    console.log("One extra is granted"); // used Super Keyword
    
    // console.log(`Employee has request ${Leave + 1} Leaves((One Extra))`);
  }
}

// let a = new Employee();
let a = new Programming();
a.logIn();
a.requestLeaves(3);
