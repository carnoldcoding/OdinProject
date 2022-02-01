
/*
    ==Variable Declaration==
    There are three ways to declare a variable.
    All three ways allow the declaration of any type inside that variable.
    'var' and 'let' are both mutable, 'const' is immutable.

    Javascript is a dynamically typed language which means that variables are
    typed but do not have to be only one type.
*/
var firstName = "Michael"
let middleName = "Carter"
const lastName = "Williams"

console.log(firstName + " " + middleName + " " + lastName);

let num1 = 1;
let num2 = 2;

num1 = 2; //Changed value of num1 to one of the same type

console.log(num1 + num2);

let phoneNumber = 1231231234;
phoneNumber = "123-123-1234"; //Changed value of phoneNumber to a different type dynamically

console.log(phoneNumber);

/*
    ==Types==
    Number -> (Int, Float) Whole number, or real number/decimal
    BigInt -> Huge Numbers (usually unnecessary)
    String -> Word or Letter, defined by single or double quotes
    Bool -> True/False flag
    Null -> special value that means empty
    Undefined -> value not assigned
    Objects -> Variables that store multiple types of data
    Symbols -> No idea yet
*/

let decimal = 4.0;
let string = "string";

let char = 'char';
let boolean = true;
let integer = 4;
let bigInteger = 1234124123412341234n;

// Null/Undefined Example
let nothing;
console.log(nothing);
nothing = null;
console.log(nothing);

/*
    ==Type Conversions==
    
    Most of the time conversions are done implicitly and the programmer
    doesn't have to worry about them.

    Non-empty strings are always considered true. " " => True
    Empty strings are false. "" => False

    Most popular conversions are
    * Number
    * String
    * Boolean
*/

let convert = true;
console.log(typeof convert);
convert = String(convert);
console.log(typeof convert);

let numConvert = "123";
console.log(typeof numConvert);
numConvert = Number(numConvert);
console.log(typeof numConvert);

let boolToNum = true;
console.log(typeof boolToNum);
boolToNum = Number(boolToNum);
console.log(typeof boolToNum);

//Tricky sequence hehe
let stringToBool = "false";
console.log(typeof stringToBool);
stringToBool = Boolean(stringToBool);
console.log(typeof stringToBool + " " + stringToBool);