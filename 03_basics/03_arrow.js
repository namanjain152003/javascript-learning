const user ={
    username:"hitesh",
    price: 999,
    welcomeMessage :function(){
        console.log(`${this.username} welcome to website`)
        //console.log(this);
           
     }
}
//this keyword refers to the current context 
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this);


/*function chai(){
    let username = "hitesh"
    console.log(this.username);
    
}
chai()*/
/*
const chai =function(){
    let username ="hitesh"
    console.log(this.username);
    
}
chai()
*/
const chai =() => {
    let username ="hitesh"
    console.log(this);
    
}
//chai()

/*const addTwo =(num1,num2)=>{
    return num1+num2
} // this is explicit return , when we use curly braces return is important
console.log(addTwo(3,4));*/

//const addTwo =(num1,num2)=> (num1+num2) // in this type return is not required
// this is implicit return
//console.log(addTwo(3,4));

//this is how object return 
const addTwo =(num1,num2)=>({username:"hitesh"})
console.log(addTwo(3,4)); 
