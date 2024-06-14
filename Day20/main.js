//Day 20
//Q58
//calculate average score
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (score, sum) { return score + sum; }, 0);
    return total / scores.length;
}
console.log(averageScore(34, 56, 78, 190, 456));
//59
//this program make function that a specific number
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
var addSeven = makeAdder(7);
console.log(addSeven(10));
//60
var userProfile = (function () {
    var name = "Uzair";
    var age = 34;
    return {
        displayInfo: function () {
            console.log("Name : ".concat(name, " , Age : ").concat(age));
        }
    };
})();
userProfile.displayInfo();
