//DAy 12
//Q34
var pizzas = ["peproni", "fajita , chicken"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza"));
    console.log("I love pizza");
});
//Q35
var animals = ["dog", " cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("".concat(animal, " would make a great pet"));
    console.log("both animal are sharp legs");
});
// //Q36
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it"));
}
make_shirt("medium", "Code is Life");
