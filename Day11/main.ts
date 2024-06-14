
//Day 11
//Q31
let user = []
if(user.length === 0 ){
    console.log("we need find some users");    
}else{
    console.log("hello users"); //greet user
}
  
//Q32
let current_users:string[] = ["ali" , "john" , "davin" , "elsa"]
let new_users :string[]= ["amna" , "davin" , "elsa" , "yumnah"]

new_users.forEach((new_user)=>{
if(current_users.some
(
    (current_user) => current_user.toLowerCase()=== new_user.toLowerCase()
)
){
console.log(`${new_user}  will need to enter a new username`);
}else{
    console.log(`${new_user}  is available.`)
}
})

//Q33
let positions : number[] = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ]

positions.forEach ((position) => {
    let suffix = "th";
  if (position === 1){
     suffix = "st";
  } else if (position === 2){
     suffix = "nd";    
  }  else if (position === 3){
     suffix = "rd";
    };

    console.log(`${position}${suffix}`);
});ko