/*
    ==Arrow Functions==
    Arrow functions are function expressions written in a different syntax
*/


//Example of arrow functions with a callback function
const doMath = (callback, a, b) => {
    return (callback(a,b));
}

//In this example the doMath function has a callback which determines which
//type of math the function will do.
console.log(
    doMath(
        (a, b) => {return a + b},
        10,
        5
    )
);

console.log(
    doMath(
        (a, b) => {return a - b},
        10,
        5
    )
);