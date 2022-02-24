/*
    ==Loops==

    Loops are ways to continue executing a block of code while
    a specific condition is met.
*/

let a = 5;
let i = 0;

//Executes while condition is true
while(i<a){
    i++;
    console.log(i);
}

//Executes the block of code in the do statement at least once
//then checks the conditional and enters the while loop
do{
    console.log(i);
}
while(false);

//This is shorthand for while i!=0
while(i){
    i--;
    console.log(i);
}

//Another way to loop is a for loop
//When the iterator variable is defined inside the conditional it exists only inside
//the loop itself, and is removed after. If not, the value is carried after the loop ends
for (i = 0; i < 5; i++){
    console.log(i);
}

//Break can be used to break any loop
for (let x = 0; x<5; x++){
    console.log(x);
    if(x==3) break;
}

//Continue can be used to skip a specific iteration
for (let x = 0; x<5; x++){
    if(x==3) continue;
    console.log(x);
}

/*
    You can define loops by giving loops labels before defining them.
    This allows you to break/continue specific loops in a nested loop situation.
    Breaks/continues with labels are the same as without, they can only occur
        inside the body of a loop.
*/

rows: for(let x=0;x<3;x++){
    columns: for(let y=0;y<3;y++){
        console.log(`(${x}, ${y})`);
        if(x==2) break rows;
    }
}

/* forEach loops make a function callback on every element in an array */
const array = [1,2,3,4,5];
array.forEach(element => {
    console.log(element+1);
});