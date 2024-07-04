//Day 26
// Q76
function add (num1 : number , num2 : number):number {
    return  num1 + num2 ;
}

console.log(add(4 , 5));

//Q77
function greet (user : string = "anynomous") {
    console.log(`Hello ${user}!`);
}
greet();
greet("Maham");

//Q78
function squareDeclaration (number : number):number {
    return number * number 
}

const squareExpression = function (number : number):number{
    return number * number;
} 
console.log(squareDeclaration(8));
console.log(squareExpression(8));


