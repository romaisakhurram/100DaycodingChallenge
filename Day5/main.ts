
//DAY 5
//Q13
let transports : string[] = ["honda" , "civic" , "motorcycle"];
transports.forEach (transport=> {
console.log(`I like to own a ${transport}`)
})

//Q14
let guests : string[] = ["Amna" , "Tehreem" , "Yumna" ];
guests.forEach(guest =>{
    console.log(`Dear ${guest}, you’d like to invite to dinner`)
})

//Q15
let unableToAttened = "Amna"
console.log(`Dear ${unableToAttened}, could not join the dinner`);

let newGuest = "Mina"
guests[guests.indexOf(unableToAttened)] = newGuest

guests.forEach(guest =>{
    console.log(`Dear ${guest}, you’d like to invite to dinner`)
});