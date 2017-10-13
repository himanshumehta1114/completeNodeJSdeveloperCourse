console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo();
// console.log(user);
var res = notes.addNote();
var add = notes.add(2,3);
console.log(res);
console.log(add);
// fs.appendFile('greetings.txt', 'Hello ' + user.username + '\n');
//  using template strings
// fs.appendFile('greetings.txt',`Hello ${user.username} ! You are ${notes.age}`);
