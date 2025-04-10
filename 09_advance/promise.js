/*A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

It has 3 states:
Pending – Initial state

Fulfilled – Operation completed successfully

Rejected – Operation failed*/

//method 1
const promiseOne= new Promise(function(resolve,reject){
    // do any async task
    //db calls,cryptography 
     setTimeout(function(){
        console.log('Async task complete')
        resolve()
    },1000)
})

promiseOne.then(function(){ // then is connected with resolve
    console.log("Promise consumed")
})


// METHOD 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved") 
})
 

//5:50
const Promise Three