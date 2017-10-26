const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33,11);
  if(res != 44)
  throw new Error(`Expected 44 but got ${res}`);
});

it('should square two numbers', () => {
  var sq = utils.square(4);
  if(sq != 16)
  throw new Error(`Expected 16 but got ${sq}`);
});
