// This is arrow function
var square = x => x*x;

var user = {
  name: 'himanshu',
  sayHi: () => {
    // this.name will print undefined here becoz this do not binds to the current object in arrow functions.
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt() {
    // this will print the name becoz it is the old function which has this bindings
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt();
