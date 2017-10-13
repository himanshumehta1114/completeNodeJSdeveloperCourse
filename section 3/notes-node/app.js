console.log('Starting app.js');

const notes = require('./notes.js');

// getting user input at command line by using process.argv
var command = process.argv[2];
console.log(command);
