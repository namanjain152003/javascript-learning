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
 

//taking data in then(data consumption)
const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username:"chai",email:"naman@gmail.com"})

    },1000)
})
PromiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"hitesh",password:"123"})
        } else{
            reject('ERROR')
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username);
    
}).catch(function(error){ // catch is used to operate errors
    console.log(error); 
}).finally(function(){
    console.log("the promise is either resolved or rejected");
    
})


// async and await method 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
 consumePromiseFive()

 // async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.