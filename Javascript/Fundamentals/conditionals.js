/*
    ==Conditionals==
    Conditional branching
        The if statement allows for conditional lines of code to be ran, and can be
        reduced to the "?" statement.

        ? is a ternary operator.

        If can be followed by else which runs when the above if statement is false
        If can also be followed by else-if, which is another if statement that
        runs when the first If is false. These can be nested all the way until
        a final else statement.

    Nullish Coalescing Operator ??
        The ?? operator is a binary operator that returns whichever operator is defined.
        Commonly used as a default value for a variable that has the opportunity to be undefined
    
    Switch Statements
        Very similar to if/else if/else statements. Switch statements deal with multiple
            cases and execute blocks of code pertaining specifically to them.
        Switch statements also use strict equality, which means that typing will not
            implicitly change during comparisons.
*/

let a = 5;
if (a=5) console.log("a is 5!");

if(a>3){
    console.log("a is greater than 3");
    console.log("Good job!");
}

if(a!=5){
    console.log("Whoops");
}
else{
console.log("a is 5");
}

//Conditional variable assignment

let username = "Cam"
let access = username=="Cam";
let clearance = access ? "Full" : "Restricted";

console.log(clearance);

//Nullish Operator
let defined = "defined";
let undefined;

console.log(defined ?? undefined);

//Switch statements need breaks otherwise the cases after a confirmation will also run
let n = 5;

switch(n){
    case 5:
        console.log("N is equal to 5");
        break;
    case 1:
        console.log("N is equal to 1");
        break;
    }
