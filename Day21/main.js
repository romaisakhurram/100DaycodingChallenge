//Day 21
//Q61
// making a list (enum) for a different types of vehicle 
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["truck"] = 1] = "truck";
    vehicleType[vehicleType["motorcycle"] = 2] = "motorcycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.truck);
console.log(vehicleType.motorcycle);
;
var student = {
    name: "uzair",
    age: 12,
    courses: ["Office Automation", "Freelancing", "Graphic Design"]
};
console.log(student);
var Circle = {
    kind: "Circle",
    radius: 5
};
var Rectangle = {
    kind: "Rectangle",
    width: 4,
    height: 5
};
console.log(Circle);
console.log(Rectangle);
