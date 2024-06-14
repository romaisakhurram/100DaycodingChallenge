//DAY 5
//Q13
var transports = ["honda", "civic", "motorcycle"];
transports.forEach(function (transport) {
    console.log("I like to own a ".concat(transport));
});
//Q14
var guests = ["Amna", "Tehreem", "Yumna"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you\u2019d like to invite to dinner"));
});
//Q15
var unableToAttened = "Amna";
console.log("Dear ".concat(unableToAttened, ", could not join the dinner"));
var newGuest = "Mina";
guests[guests.indexOf(unableToAttened)] = newGuest;
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you\u2019d like to invite to dinner"));
});
