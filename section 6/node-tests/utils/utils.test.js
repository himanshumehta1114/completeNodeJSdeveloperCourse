const expect = require('expect');

const utils = require('./utils');


it('should add two numbers', () => {
  var res = utils.add(33,11);

  expect(res).toBe(44).toBeA('number');
  // if(res != 44)
  // throw new Error(`Expected 44 but got ${res}`);
});

it('should square two numbers', () => {
  var sq = utils.square(4);
  expect(sq).toBe(16).toBeA('number');
  // if(sq != 16)
  // throw new Error(`Expected 16 but got ${sq}`);
});

// should verify first and last names are set

it('should verify first and last names are set properly', ()=>{
  var name = {
    firstName : 'hello',
    lastName : 'world'
  }
  var nameVal = utils.setName(name,'Himanshu Mehta');

  // expect(nameVal).toEqual(name);
  expect(nameVal).toInclude({firstName: 'Himanshu', lastName: 'Mehta'});
});
