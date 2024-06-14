//Day 17
//Q49
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby));
    });
}
logHobbies("reading", "skeching", "cooking");
//50
//using template literals
var myIdealDay = " My ideal day would involve\n   1.Waking upearly and going for a jog.\n   2.Spending a few hourscoding ona personal progect.\n   3.Ending the day by reading a good book.";
console.log(myIdealDay);
//Q51
//original fuction for calculating in to a recatangle
function calculateTheArea(width, height) {
    return height * width;
}
//refactored into  arrow function
var calculateAreaArrow = function (width, height) {
    return height * width;
};
console.log(" The area of reactangular is ".concat(calculateAreaArrow(5, 9)));
