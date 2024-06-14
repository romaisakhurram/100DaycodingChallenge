//Day 19
//Q55
//start with the new list
var numbers = [1, 4, 3, 6, 7];
// double each number
var DoubleNumber = numbers.map(function (numbers) { return numbers * 2; });
//show the new list of new number 
console.log(DoubleNumber);
//Q56
//start with mixed array
var mixedArray = [true, "pink bag", 1, "yellow bag", 4, "red bags"];
//pick out only words
var stringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
// show the listjust words
console.log(stringArray);
//Q57
// calculate average grades
var grades = [23, 45, 90, 456, 345, 67];
var averageGrades = grades.reduce(function (total, grades) { return total + grades; }, 0) / grades.length;
console.log(averageGrades);
