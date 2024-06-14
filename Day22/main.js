//Day22
//Q64
// The function mixes the text and a number into a text
function CombineStringsAndNumbers(text, number) {
    // Join text and number into a single text
    return text + number;
}
console.log(CombineStringsAndNumbers("Age : ", 30));
//Q65
// The function find leftover of dividing two number
function Remainder(num1, num2) {
    // Give back leftover 10 divided by 4 
    return num1 % num2;
}
console.log(Remainder(10, 4));
//Q6 
//The program sees if both input are true
function CheckBothTrue(val1, val2) {
    //only says if both val1 and val2 are true   
    return val1 && val2;
}
//Trying with true and false
console.log(CheckBothTrue(true, false));
