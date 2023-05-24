/**
  TDD - Test Driven Development.

  It is a methodology for 
  writing code : write a test 
  and then write code to pass it. 

  We use 2 testing libraries to test our code
  1. Mocha
  2. Chai
    They are popular testing frameworks for JS.
    we can import them into a existing repo to use 
    their functions within our code
 **/

  function add (x, y){
    return x + y;
  }
  console.log("sum:", add(3, 4));

  /********** Test Example ***************** */

  //3 main functions we r using below
  // describe, it, expect

  // describe function always expects 2 params,
  // one is string and the other is cbf which accepts 
  //more "describe" functions and "it" functions to run
  // the test suits or test cases

  describe('Animals', () => {
    beforeEach(() => {
        animal = new Animal();
    });
    describe('The Animal Class', () => {
    it('should have the name property', () => {
        expect(animal.hasOwnProperty('name')).to.equal(true);
    });
    });
  });