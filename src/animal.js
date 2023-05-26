/* ----------------------

Note: BEFORE tackling each question below,
read the tests in the test file.

1. Add properties called "legs", "sound" and "type".
2. Add a method called "getOlder" so that it increases
   the age by 1 whenever it is called and then 
   returns the new age.
3. Add a new method called speak that returns the
   sound property whenever it is called.

---------------------- */

class Animal {
  constructor(name) {
    this.name = name;
    this.age = 1;
    this.sound = "tweet!";
    this.legs = 4;
    this.type = "domestic";
    this.getOlder = function() {
      return this.age += 1
    }
  }
  speak() {
    // should return the sound
    return this.sound;
  }
  // getOlder(){
  // //   // should return age increased by 1
  //   return this.age += 1;
  // }
}

module.exports = Animal;
