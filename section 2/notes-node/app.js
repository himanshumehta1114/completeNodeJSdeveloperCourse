console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// Using lodash to check is passed value is string or not using isString()
console.log(_.isString(true));
console.log(_.isString('Himanshu'));
// Using lodash uniq function to remove duplicate values in an array
var filteredArray = _.uniq(['Himanshu',7,'Himanshu']);
console.log(filteredArray);
// var user = os.userInfo();
// console.log(user);
var res = notes.addNote();
var add = notes.add(2,3);
console.log(res);
console.log(add);
// fs.appendFile('greetings.txt', 'Hello ' + user.username + '\n');
//  using template strings
// fs.appendFile('greetings.txt',`Hello ${user.username} ! You are ${notes.age}`);
