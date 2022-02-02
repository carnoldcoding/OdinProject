/*
    ==Intermediate Functions==
    * Function declaration and function expression are two different concepts.
    * Function declaration is done typically.
    * Function expression assigns a function to a variable.
        Function expression allows us to create a function inside of any expression
    * No matter how a function is created in Javascript it is always a value, and that
        value can always be stored in a variable. Function expressions are useful
        because we can declare functions inside of other expressions.
*/

//Function Declaration
function hello(){
    return ("hello");
}

//Function Expression
const goodbye = function(){
    return ("goodbye");
};

//Storing a declared function into a variable
const func1 = hello;
console.log(func1());

//Using a function expression stored in a variable
console.log(goodbye());

/*
    ==Callback Functions==
    *Callback functions are functions that we expect to be 'called back' later.

    The first example here will demonstrate predefined function expressions stored in
    constant variables.

    The second example will create these functions anonymously inside of the function call.
*/

//Example 1
const callback1 = function(){
    console.log("Callback 1");
}

const callback2 = function(){
    console.log("Callback 2");
}

const callbackFunctionTest = function(value, callback1, callback2){
    //If value callback1, else callback2
    value ? callback1() : callback2();
}

//Should only call callback2 because the value is false
callbackFunctionTest(0, callback1, callback2);

//Example 2
/*
    The function expressions are defined inside of the function call. Which makes 
    the functions anonymous as they don't have identifiers.

    This means that the functions cannot be called outside of this function call,
    but that's exactly the reason for them. They become available only in the scope
    of a call.
*/
callbackFunctionTest(
    0,
    function() {console.log("Callback1 Anonymous");},
    function() {console.log("Callback2 Anonymous");}
);
