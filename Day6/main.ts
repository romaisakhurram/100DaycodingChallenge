
//Day 6 
//Q16
let guestsList : string[] = ["Amina" , "Uzair" , "Rafay" , "Laiba"];
 console.log(`Great News! I found a big table`);

//add begining guest
guestsList.unshift("Sumaiya")
//add middle guest
guestsList.splice(guestsList.length /2, 0, "Manal")
//add end guest
guestsList.push("Manahil")

guestsList.forEach(guestList =>{
    console.log(`Dear ${guestList}, you’d like to invite to dinner`)
});

//Q17
console.log("unfortunately you can invite only two people");

while(guestsList.length > 2) {
let removeGuest = guestsList.pop()
 console.log(`Dear ${removeGuest}, could not join th dinner`)}
//removed guest

guestsList.forEach(guestList =>{
console.log(`Dear ${guestList}, you were still invite the dinner`)
});

guestsList.splice(0, guestsList.length)
console.log(guestsList); 

//Q18
let places : string[] =["Yurope" , "Iran" ,  "Pakistan","Afghanistan"];
console.log(places);


console.log("original order",places);

console.log("alphabetical order",[...places].sort());

console.log("original order",places);

console.log("reverse to alphabetical order", [...places].sort().reverse());

console.log("original order", places);

console.log("reverse the order" ,places.reverse());

console.log("original order" , places.reverse());

console.log("alphabetical order" , places.sort());

console.log("reverse in alphabetical order",places.reverse());