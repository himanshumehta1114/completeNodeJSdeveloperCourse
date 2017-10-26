const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33,11);

      expect(res).toBe(44).toBeA('number');
      // if(res != 44)
      // throw new Error(`Expected 44 but got ${res}`);
    });
    it('Should async add two numbers', (done) => {
      utils.asyncAdd(4,3, (sum)=> {
        expect(sum).toBe(7).toBeA('number'); //Although this test should fail but it passes because according to us its an
        // asynchronous function and it takes 1000ms to return value but mocha doesn't recognise it as asynchronous function and it doesn't wait for 1 sec.It sees no error at that instant and shows it as passed test
        done();   // passing done as an argument to 'it' mocha sees it as asynchronous function and we call done() function to make mocha check the asynchronous function.
      });
    });

  })

  it('should square two numbers', (done) => {
    var sq = utils.square(4, (square) => {
      expect(square).toBe(16).toBeA('number');
      done();
    });
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
});
