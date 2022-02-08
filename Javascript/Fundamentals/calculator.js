/*
    ==Calculator==
*/

function Calculator() {
    //Properties
    this.a = 0;
    this.b = 0;

    //Methods
    this.read = function(a, b){
        this.a = a;
        this.b = b;
    }

    this.add = function(){
        return this.a + this.b;
    }

    this.subtract = function(){
        return this.a - this.b;
    }
}

let calculator = new Calculator;

calculator.read(15, 20);
console.log(calculator.add());
console.log(calculator.subtract());