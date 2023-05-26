const { expect } = require("chai");
const { isClass } = require("./utilities");
const Poodle = require("../src/poodle");

let poodle = null;

xdescribe("Poodles", () => {
  beforeEach(() => {
    poodle = new Poodle();
  });

 xdescribe("The Poodle class", () => {
    it("should be a class", () => {
      expect(isClass(Poodle)).to.be.true;
    });
  });

  xit("should increase the age by 7 each time it is called", () => {
    poodle.age = 0;
    poodle.getOlder();
    poodle.getOlder();
    poodle.getOlder();
    expect(poodle.age).to.equal(21);
  });
});

xit("should state average lifetime haircuts", () => {
  poodle.lifetimeHaircuts();
  expect(poodle.age).to.equal();
});

xit("should have preset properties for sound and legs", () => {
  expect(poodle.sound).to.equal("woof");
  expect(poodle.legs).to.eqaul(4);
});
