const expect = require('expect');
// Creating spies
describe('App', () => {
  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });
});
