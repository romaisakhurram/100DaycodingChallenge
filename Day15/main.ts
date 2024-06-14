
 //Day 15
//Q43
let magicianNames : string[] = ["ali" , "rafay" , "uzair"];

function make_great(magiciansNames : string[]):string[] {
let great_Magicians : any[] = [];
 magicianNames.forEach((magicianName) => {
  great_Magicians.push(`${magicianName} the gret`);
})  ;

return great_Magicians;
}

function show_Magician(magiciansNames : string[]) {
  magicianNames.forEach((magicianName) => {
 console.log(magicianName);
  });
}
  
let great_Magicians = make_great(magicianNames.slice())  // create a new modified array
console.log("original magicians");
show_Magician(magicianNames); // show original names
console.log("great magicians");
show_Magician(great_Magicians); // showmodified names

//Q44
function sandwiches(...items : string[]) {
console.log(`making a sanwich with: ${items.join(", ")}`);
}
sandwiches("barBQ" , "mayonise");
sandwiches("cucumber" , "jam" , "mustard");
sandwiches("lettuce" , "tomato" );

// Q45
function make_car (
   manufacture : string ,
   model : string,
   ...option  : [string , any][]
  ) 
{
  let cars  : any = {manufacture ,  model};
 option.forEach(([key , value]) => (cars[key] = value));
 return cars;
}
console.log(make_car("toyota" , "corrolla" , ["colour" , "red"] ,
   ["year" , 2017]));
console.log(make_car("honda" , "civic" , ["colour"  , "white"] ,[ "year" , "2024"]));