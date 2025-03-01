function saymyname(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}
//saymyname()

//function addTwoNumbers(number1 , number2){
   // console.log(number1+number2);
//}

function addTwoNumbers(number1 , number2){
    //let result = number1 + number2
    //return result
    return number1 + number2
} 

const result = addTwoNumbers(3,4)
//console.log(result);

function loginUserMessage(username="sam"){ // here sam is default value
    if(username==undefined){
        console.log("please enter a username");
    }
    return `${username}  just logged in`
}

console.log(loginUserMessage("naman"))
console.log(loginUserMessage()); // it gives undefined


function calculateCartPrice(...num1){ //... is rest operator helps to get multiple values
    return num1
}
console.log(calculateCartPrice(200,500,900));


// object functions
const user ={
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
  
}
handleObject(user)
handleObject({
    username:"sam",
    price:399
})


// array functions
const myNewArray =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
