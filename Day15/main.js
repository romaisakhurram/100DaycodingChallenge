//Day 15
//Q43
var magicianNames = ["ali", "rafay", "uzair"];
function make_great(magiciansNames) {
    var great_Magicians = [];
    magicianNames.forEach(function (magicianName) {
        great_Magicians.push("".concat(magicianName, " the gret"));
    });
    return great_Magicians;
}
function show_Magician(magiciansNames) {
    magicianNames.forEach(function (magicianName) {
        console.log(magicianName);
    });
}
var great_Magicians = make_great(magicianNames.slice()); // create a new modified array
console.log("original magicians");
show_Magician(magicianNames); // show original names
console.log("great magicians");
show_Magician(great_Magicians); // showmodified names
//Q44
function sandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sanwich with: ".concat(items.join(", ")));
}
sandwiches("barBQ", "mayonise");
sandwiches("cucumber", "jam", "mustard");
sandwiches("lettuce", "tomato");
// Q45
function make_car(manufacture, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var cars = { manufacture: manufacture, model: model };
    option.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (cars[key] = value);
    });
    return cars;
}
console.log(make_car("toyota", "corrolla", ["colour", "red"], ["year", 2017]));
console.log(make_car("honda", "civic", ["colour", "white"], ["year", "2024"]));
