//Day4
// Q10
// Romaisa, 2024-05-05
// This program prints a personal message.
let myName: string = "Romaisa";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

//Q11
let names: string[] = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//Q12
let names2: string[] = ["Alice", "Bob", "Charlie"];
for (let name2 of names2) {
    console.log(`Hello ${name2}, would you like to learn some TypeScript today?`);
}