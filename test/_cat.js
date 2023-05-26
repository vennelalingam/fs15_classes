const { expect } = require('chai');
const { isClass } = require('./utilities');
const Cat = require('../src/cat');

let cat = null;

xdescribe('Cat', () => {
  beforeEach(() => {
    cat = new Cat();
  });

  xdescribe('The Cat class', () => {
    it('should be a class', () => {
      expect(isClass(Cat)).to.be.true;
    });

    xit('should have a property named sound and age', () => {
      // your code here
      cat.hasOwnProperty("sound").to.equal(true);
      cat.hasOwnProperty("age").to.equal(true)
    });
  });

});