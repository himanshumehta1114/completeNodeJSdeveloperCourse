// var obj = {
//   name: 'Himanshu'
// };
// var stringObj = JSON.stringify(obj);
// // checking datatype
// console.log(typeof stringObj);
// console.log(stringObj);

var personString = '{"name": "Himanshu","age": 20}';
// parsing json from string
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
