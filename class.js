
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

console.log(person1.age); // 10
console.log(person1.getOlder()) //  11
 console.log(person1.getOlder()) //12
 console.log(person1.getOlder()) //13
 console.log(person1.getOlder()) //14
console.log(person1.age) // 14

console.log(person2.age); // 5
console.log(person2.getOlder()) //  5
console.log(person2.getOlder()) //  6
console.log(person2.getOlder()) //  7
console.log(person2.getOlder()) //  8
console.log(person2.age);   //  9


let num = [1, 2, 3]
console.log(num) //
// creating an array using the "new Array" keyword
// with elements inside paranthesis.
const ray = new Array(4, 5, 6); 

console.log(ray); //    [4, 5, 6]
console.log(ray.length) // 3
console.log(ray.push(7));
console.log(ray);   //  [4, 5, 6, 7]
