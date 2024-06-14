
//Day 8
//Q22
let names_program : string[] = ["Ali" , "Alishba" , "Uzair" , "Rafay"];
console.log(names_program[1]);//intentional error array can be start index 0
console.log(names_program[4]); //correct  index 

// //Q23
let car = "subaru"

console.log("Is car == `subaru`? , I predict true ");
console.log(car == `subaru`);

console.log("Is car > `subaru` , Ipredict false");
console.log(car > `subaru`);

console.log("Is car >= `subaru` , Ipredict true");
console.log(car >= `subaru`);

console.log("Is car == `honda` , Ipredict fasle");
console.log( car == `honda`);

//Q24
let vegetables :string[] = ["tomato" , "onion" , "potato" , "carrot"]

console.log("is onion in vegetables , I predict true");
console.log(vegetables.includes("onion"));

console.log("is onion in vegetables , I predict false");
console.log(vegetables.includes("radish"));

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True

//test whether in items
let items : string[] = ["books" , "pencils" , "mouse"]
 console.log("is books in items , I predict true");
 console.log(items.includes("books")); 

 //numerical test
 console.log(5 > 10 );
 
 console.log(20 < 30 );
