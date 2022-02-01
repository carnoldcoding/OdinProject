/*
    ==Operators==

    Basic arithmetic is the same.
    % is the remainder operator of an integer division. 8%4==0, whereas 10%4==2.
    ** is exponentiation. 2**3==8, 3**2=9

    Addition is also used in string concatenation.
    The + has a unary and binary operation. Meaning it can be used on a single
    value or pair of values. If used on a single value it is a shorthand for
    the Number(..) conversion. If used as a binary value it functions
    normally.

    Quick modifications with the assignment operator can occur
    with concatenation of other operators. a *= 4 | a = a*4

    Increment: ++
    Decrement: --

    Increments and decrements can only be applied to variables

    The prefix form of incrementors is used when the value
    is immediately assigned to another variable.

    Otherwise postfix or prefix doesn't matter.
*/

console.log(10%4);
console.log(8%4);

console.log(2**3);
console.log(3**2);

let a = "2";
let b = "3";

//First is the binary operator + which causes string concatenation
//Second is the unary operator with the binary operator to cause integer addition
console.log(a + b);
console.log(+a + +b);

a = +a;
a *= 2;
console.log(a);

//Postfix ++ doesn't work within assignment operators, if you plan to assign
//The result value of an increment you must use the prefix.
a = a++;
console.log(a);

a = ++a;
console.log(a);

/*
    ==Bitwise Operators==
    AND &&
    OR ||
    XOR ^
    NOT !
    LEFT SHIFT <<
    RIGHT SHIFT >>
    ZERO-FILL RIGHT SHIFT >>>
*/