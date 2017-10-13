// var obj = {
//   name: 'Himanshu'
// };
// var stringObj = JSON.stringify(obj);
// // checking datatype
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "Himanshu","age": 20}';
// // parsing json from string
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
