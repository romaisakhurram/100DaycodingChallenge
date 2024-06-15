
//Day25
//Q73
function Updatevariable() {
//initial assign the value to  blue
let colour = "Blue";
console.log("Initial value" , colour);

//updated the value to green
colour = "Green";
console.log("Updated value" , colour);
}

Updatevariable();

//Q74
// the function swap the value of two variable  
function SwapValue() {
    let a = 5 , b = 10; //initially a = 5 , b = 10
    console.log("Before Swape value: a =", a ,"b =", b);

   let temp = a; //temporarily a store the value a
   a = b;  //set a to b value
   b = temp; //set b to a original store in temp
   console.log("After swap value: a =" , a, "b =" , b);
}
SwapValue();

//Q75
//The function use compound operator for different operation
function UseCompoundOperator() {
    let x = 4;
    x += 2;   // addition  x by 2
    console.log(x);
    
    x -= 1 // subtraction x by 1
    console.log(x);
    
    x *= 3  // multiplies x by 3
    console.log(x);

    x /= 2  //divide x by 2
    console.log(x);
}
UseCompoundOperator();








