/*
    ==Functions==
        Functions are the first step to code reusability. Functions
        allow a programmer to write code one time and then use it in many places.
        This improves readability, and writability of a program.

        Functions take parameters, execute the code inside, and have the ability to return values
        
        Functions should only do what they advertise. If more is happening, make a new function.

        Variables have specific scopes. When a variable is delcared inside a function, it exists only inside
        that scope. Which means that you can reuse the same variable names in different functions.

        When a variable is declared outside of a function, it can be used in any function on that document
        without passing it as a variable. This is because it exists in the outer scope. The variable
        can also be modified inside the function. 
        
        These are known as global vs local variables.

        Functions can also have default variables

        Function declarations can be used before they are defined in the document. This is because
        Javascript initializes all function declarations before running the program. Whereas
        function expressions are only available to use after they've been written.
        */

//This function takes two values, a and b then uses the + operator on them
function add(a, b){
    return(a+b);
}
console.log(add(5,10));
console.log(add(5,15));

//Simple HelloWorld function
function helloWorld(){
    console.log("Hello World");
}
helloWorld();

//Two functions with the same variables inside them don't cause an error because
//the variables only exist in the scope of the function
function hello(name){
    let message = `hello ${name}`;
    console.log(message);
}
hello("cameron");

function goodbye(name){
    let message = `goodbye ${name}`;
    console.log(message);
}
goodbye("cameron");

//Outer scope variable example
let firstName = "cameron";
function whoami(){
    console.log(firstName);
}
whoami();

//Outer scope variable modification
function changeName(){
    firstName = "tucker";
}
changeName();
console.log(firstName);

//Default variables
function subtract(a=5, b=4){
    return (a-b);
}

console.log(subtract());
console.log(subtract(4, 19));
