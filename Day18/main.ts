
//Day 18
//Q52
// set a detail of mobilephone
let smartPhone = {
    Make : "Infinix",
    Model : "Hot 10",
    spec :{
    SizeScreen : "10.5 inches",
    BatteryTiminig : "18 hours",
    Storage : "8 GB"
}
};
console.log(smartPhone);

//Q53
let developerSkills = {
languages : ["Phyton" , "Javascript" , "Typescript"],
frameWork : ["React" , "Angular" , "Vaue"] ,
tools : ["Git" , "Webpack" , "Docor"]
}
let { languages , frameWork , tools } = developerSkills

console.log(`Languages : ${languages[0]} , Frame Work : ${frameWork[0]} , Tools : ${tools[0]}`);

//Q54
function CreateObjectWithDynamicKey( key : string , value : string ) {
   let dynamicObject : any = {}
   dynamicObject [key] = value 
    return dynamicObject;
}
let user_preference = CreateObjectWithDynamicKey ("colour" , "black");
console.log(user_preference);