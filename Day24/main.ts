
//Day24
//Q70
//The function print numbers from 1 to 5  using loop
function PrintWithNumberLet() {
// use let loop for variable i 
for(let i = 1 ; i <= 5 ; i++){
    console.log(i); // logs for variable 1 through 5  
}
}
PrintWithNumberLet()

//Q71
//using Let for a variable that can be reassigned
let numbers = [1 , 2 , 3 ]
numbers = [2 , 4 , 5 ,7 ] // also work fine here for reassigment
console.log(numbers);

//trying to reassign a const declared variable
const names = "sana"
try {
//    names = "laiba" // this line cause error
} catch(error){
    console.log("Error : ressigned a `const` declared variable");
}

//Q72
//demonstrating block scope
let blockLet = "visible inside the block"
const blockConst = "also only inside the block"
console.log(blockLet); //this work fine here
console.log(blockConst);// also work fine here


try{
    console.log(blockLet); //this will fail
} catch {
    (Error)
    console.log("blockLet is not accessible outside the block");
}

try{
    console.log(blockConst); // this will also fail
} catch {
    (Error)
    console.log("blockConst is not accessible outside the block");
}
    














