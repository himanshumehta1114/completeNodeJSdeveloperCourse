console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo();
// console.log(user);
var res = notes.addNote();
console.log(res);
// fs.appendFile('greetings.txt', 'Hello ' + user.username + '\n');
//  using template strings
// fs.appendFile('greetings.txt',`Hello ${user.username} ! You are ${notes.age}`);
