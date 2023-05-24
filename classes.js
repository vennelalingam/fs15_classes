
const person1 = {
    name: "Bhoomi",
    age: 10,
    getOlder: function(){
        return this.age;
    }   
}

const person2 = {
    name: "Bhuvan",
    age: 5,
    getOlder: function() {
       return this.age++
    }
}

// console.log(person1.age); // 10
// console.log(person1.getOlder()) //  11
//  console.log(person1.getOlder()) //12
//  console.log(person1.getOlder()) //13
//  console.log(person1.getOlder()) //14
// console.log(person1.age) // 14

// console.log(person2.age); // 5
// console.log(person2.getOlder()) //  5
// console.log(person2.getOlder()) //  6
// console.log(person2.getOlder()) //  7
// console.log(person2.getOlder()) //  8
// console.log(person2.age);   //  9


let num = [1, 2, 3]
// console.log(num) 

// creating an array using the "new Array" keyword
// with elements inside paranthesis.

const ray = new Array(4, 5, 6); 

// console.log(ray); //    [4, 5, 6]
// console.log(ray.length) // 3
// console.log(ray.push(7));
// console.log(ray);   //  [4, 5, 6, 7]

/*
//  Creating a Class: Here "class" is the keyword for creating
//  a new class. 
//  constructor: can take arguments for initialization
//  this:   the context

class Array {   // class array always Capital letter "Array"
    constructor() {     // this is function or method
        this.items = {} //here we define all the properties
        this.length = 0;
    }

    // we can define all our methods here, push, pop, shift, unshift
    // map, filter, splice, slice, foreach, reduce etc..
    push(value) { 
        // add value to this.stuff
        // use a number for key
        // increase this.length
    }
}
*/

// Example 1
class City{
    constructor(nameParam, population){
        this.population = population;
        this.name = nameParam;
    }
    addPeople(){
        this.population += 100
    }
}

let x = new City("Tokyo", 17000000);
console.log(x)
console.log(x.population)

x.addPeople()
x.addPeople()
x.addPeople()
x.addPeople()
x.addPeople()
console.log(x.population);

//Example 2

// class Vehicle{
//     constructor(color){
//         this.wheels = 4;
//         this.color = color;
//     }
//     drive() {
//         if(this.color === "red"){
//         console.log("vroom vroom");
//         } else console.log(this.color)
//     }
// }
// let car = new Vehicle("red");

// car.drive()
// car.color = "blue"
// console.log(car)



class Vehicle {
    constructor(wheels, color) {
        this.wheels = wheels;
        this.color = color;
    }

    drive() {
        console.log("vroom vroom");
    }
}


class Train extends Vehicle {
    constructor() {
        super(6, "red");
        this.rails = true;
    }
// polymorphism: means "many forms", and it occurs 
// when we have many classes that are related to each other by inheritance
// yet we can over write some of their properties 
    drive() {
        console.log("chug chug");
    }
}

const expressTrain = new Train()
expressTrain.drive() // chug chug

//drive method is over written only for trains not for cars
const car = new Vehicle()
car.drive() // vroom vroom