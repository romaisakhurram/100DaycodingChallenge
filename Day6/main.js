var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Day 6 
//Q16
var guestsList = ["Amina", "Uzair", "Rafay", "Laiba"];
console.log("Great News! I found a big table");
//add begining guest
guestsList.unshift("Sumaiya");
//add middle guest
guestsList.splice(guestsList.length / 2, 0, "Manal");
//add end guest
guestsList.push("Manahil");
guestsList.forEach(function (guestList) {
    console.log("Dear ".concat(guestList, ", you\u2019d like to invite to dinner"));
});
//Q17
console.log("unfortunately you can invite only two people");
while (guestsList.length > 2) {
    var removeGuest = guestsList.pop();
    console.log("Dear ".concat(removeGuest, ", could not join th dinner"));
}
//removed guest
guestsList.forEach(function (guestList) {
    console.log("Dear ".concat(guestList, ", you were still invite the dinner"));
});
guestsList.splice(0, guestsList.length);
console.log(guestsList);
//Q18
var places = ["Yurope", "Iran", "Pakistan", "Afghanistan"];
console.log(places);
console.log("original order", places);
console.log("alphabetical order", __spreadArray([], places, true).sort());
console.log("original order", places);
console.log("reverse to alphabetical order", __spreadArray([], places, true).sort().reverse());
console.log("original order", places);
console.log("reverse the order", places.reverse());
console.log("original order", places.reverse());
console.log("alphabetical order", places.sort());
console.log("reverse in alphabetical order", places.reverse());
