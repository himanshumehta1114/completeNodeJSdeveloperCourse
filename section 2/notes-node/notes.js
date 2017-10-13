console.log('Starting node.js');
// Using arrow functions ,we can't bind this keyword
module.exports.addNote = () => {
    console.log('AddNote');
    return 'Add Note';
}
