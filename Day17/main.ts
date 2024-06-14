
//Day 17
//Q49
function logHobbies( ...hobbies : string[] ) {
    hobbies.forEach((hobby) => {
    console.log(`I enjoy ${hobby}`);
    })   
   }
   logHobbies ("reading" , "skeching" , "cooking");
   
   //50
   //using template literals
   let myIdealDay = ` My ideal day would involve
   1.Waking upearly and going for a jog.
   2.Spending a few hourscoding ona personal progect.
   3.Ending the day by reading a good book.`
   
   console.log(myIdealDay);
   
   //Q51
   //original fuction for calculating in to a recatangle
   function calculateTheArea (width : number , height : number): number {
       return height * width
   }
   //refactored into  arrow function
   let calculateAreaArrow = ( width : number , height : number): number => 
       height * width
   
   console.log(` The area of reactangular is ${calculateAreaArrow(5 , 9)}`);
   