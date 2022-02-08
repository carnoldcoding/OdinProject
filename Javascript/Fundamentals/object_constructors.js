/*
    ==Constructors==
    Constructors are just functions, that follow the following naming convention.

    function User(){}

    The functions need to have an uppercase first letter, and inside the function you can utilize the "this" keyword.
    The 'this' keyword is different for every function, and the new keyword makes sure of that.
*/

//This keyword syntax
function User(name, age){
    this.name = name;
    this.age = age;

    this.sayHi = function(){
        console.log("Hello, my name is "+this.name);
    }
}

//Alternate syntax, return an object literal
function Dog(name, age){
    return {
        name, 
        age
    }
}

//When a function uses the new keyword this happens
/*
    * Empty object is made and assigned to 'this'
    * Function body executes
    * Value of 'this' is returned
    * 'this' is a ponter to the object reference
*/
const user1 = new User("cameron", 24);

console.log(user1.name);
user1.sayHi();

const dog1 = new Dog("Puppy", 2);

console.log(dog1.name);
