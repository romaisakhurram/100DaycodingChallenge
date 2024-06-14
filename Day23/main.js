//Day 23
//Q67
// The function mixed types a number and a string
function AddNumberAndString(num1, numberString) {
    //number and numberstring add number 
    return num1 + Number(numberString);
}
console.log(AddNumberAndString(30, "45"));
//Q68
// The function multiplies two decimal number
function MultiplyDecimalNumber(num1, num2) {
    // multiplies the number and round the result of two decimal number 
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(MultiplyDecimalNumber(0.5, 0.6));
//Q69
//the funtion dividing the two number and find the qremainer and the quotient
function DivindingAndRemainder(dividend, divisor) {
    // calculate the quotient and remainder
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    //return both in  object
    return { quotient: quotient, remainder: remainder };
}
console.log(DivindingAndRemainder(29, 3));
