// primitive (call by value)

// 7 types: String ,Number, Boolean, null,undefined,symbol,BigInt

// javascript is dynamically typed language(not required to type the datatype of variable)

const score = 100
const scoreValue =11.3
// these both are of number type

const isLoggedIn = false
const outsideTemp = null
let userEmail; // (undefined)

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

const bigNumber = 2222222222222222222n



// REference (Non primitive)

// Array,objects,Functions

const heros = ["shaktimaan", "naagraj", "doga"]
console.log(heros);

 let myObj= {
    name:"naman",
    age:21,
 }

 const myFunction = function(){
    console.log("hello world");
 }
 myFunction()
 
 console.log(typeof bigNumber);//bigint
 console.log(typeof heros); // object 
 console.log(typeof myFunction); // function 
 console.log(typeof myObj); // object 
 console.log(typeof id); // symbol
 
 
 
 // ******************************  memory************************//


 // stack memory and heap memory 

 //stack => primitive
 //heap => non primitive


 // stack memory

 let myYoutubename="namanjain.com"
 let anothername = myYoutubename
 anothername = "jain.com"
 console.log(anothername);
 console.log(myYoutubename);


 // heap memory 
 
 let userOne= {
   email: " user@google.com",
   upi: "naman@kotak"
   }
  
   let userTwo = userOne
   userTwo.email="hiteshgoogle.com"
   console.log(userOne.email);
   console.log(userTwo.email);  
 