console.log('Starting app.js');

const yargs = require('yargs');
const notes = require('./notes.js');

//getting user input in key:value pair by using yargs eg. --title=secrets ,then title is key and value is secrets
const argv = yargs.argv;

// getting user input at command line by using process.argv
var command = process.argv[2];
console.log('Yargs: ',argv);
if(command === 'add'){
  notes.addNote(argv.title,argv.body);
}else if (command === 'list') {
  notes.getAll();
}else if(command === 'read'){
  notes.getNote(argv.title);
}else if(command === 'remove'){
  notes.removeNote(argv.title);
}else{
  console.log('Command not recognised');
}
