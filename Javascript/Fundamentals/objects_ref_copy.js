s/*
    ==Objects Continued==

    Variables that hold objects actually hold references to that objects
    place in memory. Which is why side effects are possible inside of functions.

    The spread operator "..." allows for easier list manipulation where you want
    to include all previous values in a list. The spread operator SPREADS
    values stored in a list or iterable object, and allows them to be easily copied,
    appended, or altered with a function call.
*/

//Here I change the value inside of a function without a return statement
let user = {
    name: "cameron",
    age: 24,
};

function sideEffect(user){
    user.name = "new name";
};

sideEffect(user);
console.log(user.name);

//Cloning objects
let user2 = {};

for (let key in user){
    user2[key] = user[key]
};

console.log(user2);

//Different method
//Assigns the values from user to an empty list and returns the result
let user3 = Object.assign({}, user);
console.log(user3);

//Spread operator for adding values to lists
let example = [1,2,3]
example = [...example, 12] //adds twelve to the list, can be repeated as many times as needed

//This runs the function console.log on every iterable value inside the example array
console.log(...example);

let spread_object = {...user}

//Spread operator for easy object cloning
let user4 = {...user3}
console.log(user4);