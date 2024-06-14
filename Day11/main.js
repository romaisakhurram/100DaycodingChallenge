//Day 11
//Q31
var user = [];
if (user.length === 0) {
    console.log("we need find some users");
}
else {
    console.log("hello users"); //greet user
}
//Q32
var current_users = ["ali", "john", "davin", "elsa"];
var new_users = ["amna", "davin", "elsa", "yumnah"];
new_users.forEach(function (new_user) {
    if (current_users.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, "  will need to enter a new username"));
    }
    else {
        console.log("".concat(new_user, "  is available."));
    }
});
//Q33
var positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
positions.forEach(function (position) {
    var suffix = "th";
    if (position === 1) {
        suffix = "st";
    }
    else if (position === 2) {
        suffix = "nd";
    }
    else if (position === 3) {
        suffix = "rd";
    }
    ;
    console.log("".concat(position).concat(suffix));
});
