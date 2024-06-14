
// //Day 10
// //Q28
let age = 19
if( age < 2){
    console.log("you are baby");
}else if( age < 4){
    console.log("you are toodler");
}else if( age < 8){
    console.log("you are kid");
}else if( age < 12){
    console.log("you are teenager");
}else if( age < 20){
    console.log("you are younger");
}else if( age < 30){
     console.log("you are adult");
 }else{
    console.log("you are older");
 }

//Q29
let fruit_name : string[] = ["apple" , "mango" , "peach" , "banana"]

if (fruit_name.includes ("apple")){
    console.log("I am fruit")
}

// Q30
let user_names : string[] = ["ali" , "sara" , "admin" , "uzair" , "almir"]

user_names.forEach(user_name =>{
 if(user_name === "admin"){  
console.log(`hello admin would you like to see a status report`)
 }else{
    console.log(`hello ${user_name} thank you for in logging again`); 
}
})