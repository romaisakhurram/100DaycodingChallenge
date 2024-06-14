
//DAy 12
//Q34
let pizzas : string[] = ["peproni" , "fajita , chicken"]
pizzas.forEach((pizza)=>{
    console.log(`I like ${pizza} pizza`);
    console.log("I love pizza");  
})

//Q35
let animals : string[] = ["dog" , " cat" , "rabbit"]
animals.forEach((animal) => {
console.log(`${animal} would make a great pet`);
console.log("both animal are sharp legs");
})

// //Q36
function make_shirt(size: string, message: string) {
    console.log(
      `Making a ${size} t-shirt with the message "${message}" printed on it`
    );
  }
  
  make_shirt("medium", "Code is Life");