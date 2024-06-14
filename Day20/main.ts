
//Day 20
//Q58
//calculate average score
function averageScore(...scores :number[]) : number {

    let total = scores.reduce ( (score , sum ) => score + sum , 0 ); return total / scores.length
}
console.log (averageScore (34 ,56 , 78 , 190 , 456) );

//59
//this program make function that a specific number
function makeAdder(valueToAdd : number) : (number : any) => number {
 return function(number : number) : number {
 return number + valueToAdd;
 }
}
let addSeven = makeAdder(7);
console.log(addSeven(10));

//60
let userProfile : any = (function()
{
    let name : string = "Uzair";
    let age :number = 34;

   return { 
        displayInfo : function () 
        {
         console.log(`Name : ${name} , Age : ${age}`);
        }
    };

})();

userProfile.displayInfo();