const { expect } = require("chai");
const { isClass } = require("./utilities");
const Animal = require("../src/animal");

let animal = null;

describe("Animals", () => {
  beforeEach(() => {
    animal = new Animal();
  });

  describe("The Animal class", () => {
    it("should be a class", () => {
      expect(isClass(Animal)).to.be.true;
    });

    it("should have properties named name, sound, type and legs", () => {
      expect(animal.hasOwnProperty("name")).to.equal(true);
      expect(animal.hasOwnProperty("sound")).to.equal(true);
      expect(animal.hasOwnProperty("legs")).to.equal(true);
      expect(animal.hasOwnProperty("type")).to.equal(true);
      expect(animal.hasOwnProperty("age")).to.equal(true);
    });
  });

  describe("The speak method", () => {
    it("should exist on the Animal prototype", () => {
      expect(Animal.prototype.speak).to.exist;
    });

    it("should return the sound when called", () => {
      //given (setting the environment)
      const input = "tweet!";
      animal.sound = input;
      // when (calling the function)
      const output = animal.speak();
      // then (expect the results)
      expect(output).to.equal(input);

      //const sampleSound = "tweet!";
      //animal.sound = sampleSound;
      //expect(animal.speak()).to.equal(sampleSound);
    });
  });
});

describe("The getOlder method", () => {
it("should exist on the Animal prototype", () => {
  expect(Animal.proptotype.getOlder).to.exist;
});

it("should return by increasing the age by 1 each time it is called", () => {
// given (setting the environment);
const input = 1;
animal.age = input;
//when (calling the function)
const output = animal.getOlder();
animal.getOlder();

expect(animal.getOlder()).to.equal(4);
})
})
