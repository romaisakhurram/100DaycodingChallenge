//Day 19
//Q55
//start with the new list
let numbers = [ 1 , 4 , 3 , 6 , 7 ]
// double each number
let DoubleNumber = numbers.map (numbers => numbers * 2 )
//show the new list of new number 
console.log(DoubleNumber);

//Q56
//start with mixed array
let mixedArray = [true ,"pink bag" , 1  , "yellow bag" , 4 ,  "red bags"]
//pick out only words
let stringArray = mixedArray.filter (item => typeof  item === "string")
// show the listjust words
console.log(stringArray);

//Q57
// calculate average grades
let grades = [23 , 45 , 90 , 456 , 345 , 67]
let averageGrades = grades.reduce  ((total , grades) => total + grades , 0 ) / grades.length
console.log(averageGrades);
