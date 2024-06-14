
//Day 13
//Q37
function make_shirt1(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
    }
    
make_shirt1(); // Default large and message
make_shirt1("medium"); // Default message, medium size
make_shirt1("small", "Dive into Coding"); // Custom message, small size

//Q38
function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");

//Q39
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("Tokyo", "Japan"));
  console.log(city_country("Paris", "France"));
