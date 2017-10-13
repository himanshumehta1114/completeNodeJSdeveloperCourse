console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);

fs.appendFile('greetings.txt', 'Hello ' + user.username + '\n');
/* using template strings  */
fs.appendFile('greetings.txt',`Hello ${user.username} World!`);
