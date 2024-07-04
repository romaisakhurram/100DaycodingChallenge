//Day 26
// Q76
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(4, 5));
//Q77
function greet(user) {
    if (user === void 0) { user = "anynomous"; }
    console.log("Hello ".concat(user, "!"));
}
greet();
greet("Maham");
//Q78
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(8));
console.log(squareExpression(8));
