const yargs = require('yargs');
const notes = require('./notes.js');

//getting user input in key:value pair by using yargs eg. --title=secrets ,then title is key and value is secrets
// const argv = yargs.argv;
//requiring arguements ,yargs advanced features
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const argv = yargs
    .command('add','Add a new note', {
      title: titleOptions,
      body: {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
      }
    })
    .command('list','list all notes')
    .command('read','read a note', {
      title: titleOptions
    })
    .command('remove','remove a note', {
      title: titleOptions
    })
    .help()
    .argv;
// getting user input at command line by using process.argv
var command = process.argv[2];
if(command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note Created');
    notes.logNote(note);
  }else{
    console.log('Note title taken');
  }
}else if (command === 'list') {
  var note = notes.getAll();
  console.log(`Printing ${note.length} note(s)`);
  note.forEach((n) => notes.logNote(n));
}else if(command === 'read'){
  var note = notes.getNote(argv.title);
  if(note) {
    console.log('Note Found');
    notes.logNote(note);
  }else{
    console.log('Notes not found');
  }
}else if(command === 'remove'){
  var notesRemoved = notes.removeNote(argv.title);
  if(notesRemoved){
    console.log('NOte removed');
    console.log('--');
    console.log(`Title : ${argv.title}`);
  }else{
    console.log('Note not found');
  }
}else{
  console.log('Command not recognised');
}
