/*
    ==Methods==
    Methods are an object's way to have actions. We have already given our objects
    attributes and variables, now they need ways to act. These methods of action
    are known as methods.

    The value of the "this" keyword depends on its scope and is evaluated at runtime.
    
    Arrow functions have no "this"
*/

let user = {
    name: "Cameron",
    age: "24"
}

user.sayHi = () => {
    console.log("Hello my name is " + user.name);
}

user.sayBye = function(){
    console.log("Goodbye " + this.name);
}

user.sayHi();
user.sayBye();

//Shorthand, + the this keyword.
//When creating anonymous function with arrow syntax, the 'this' keyword doesn't work.
let user2 = {
    name: "Cameron",
    age: "24",

    sayHi: () => {
        console.log("Hello " + this.name)
    }
}

user2.sayHi();
