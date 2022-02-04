/*
    ==Objects==
    Objects are data types that store multiple different types of data.    

    Object attributes are key value pairs, where the key is to the left of the value
    delimited by a colon.
*/

let user = new Object(); //Object Constructor
let user2 = {}; //Object Literal

let user3 = {
    name: "Cameron",
    age: 23
}; //Object Literal example

console.log(user3.name);

// You can add and delete properties from objects
user3.username = "Cam123"; //Add property
console.log(user3.username);

delete user3.username; //Remove property
console.log(user3.username);

//Properties can also be multi-line though I wouldn't recommend it
//However this syntax can be used to query keys with ease (rhyme)
user3["Bad Practice"] = "wow";
console.log(user3["Bad Practice"]);


//Way to make an object through a function by returning and object literal
function makeUser(name, age){
    return{
        name,
        age
    }
}

let user4 = makeUser("cameron", 24);
console.log(user4.name);

//Method of querying key value pairs
let example = {
    "key": value=5
}

console.log(example["key"])

//Computed Properties are keys that are defined from other sources
let key = "new_key";

let new_example = {
    [key]: 5
}

console.log(new_example.new_key)

//The "in" keyword
//The keyword checks for keys that match the string which precedes it.
const in_example = () => {
    let example_object = {
        name: "Cameron",
        age: "24",
        occupation: "SWE"
    }
    if("age" in example_object){
        console.log(example_object.age);
    }

    for(key in example_object){
        console.log(key + ": " + example_object[key])
    }
}

in_example()

