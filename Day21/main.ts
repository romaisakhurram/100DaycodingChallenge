
//Day 21
//Q61
// making a list (enum) for a different types of vehicle 
enum vehicleType {
    car,
    truck,
    motorcycle
}
console.log(vehicleType.truck);
console.log(vehicleType.motorcycle);

//62
interface studentType {
    name : string,
    age : number,
    courses : string[]
};
 let student : studentType = {
  name : "uzair",
  age : 12,
  courses : ["Office Automation" , "Freelancing" , "Graphic Design"] 
}

console.log(student);

//Q63
type shapes = {
    kind : "Circle" | "Rectangle",
    radius? : number,
    height? : number,
    width? : number
};

let Circle : shapes = {
    kind : "Circle",
    radius : 5
};

let Rectangle : shapes = {
    kind : "Rectangle",
    width : 4,
    height : 5
};

console.log(Circle);
console.log(Rectangle);
