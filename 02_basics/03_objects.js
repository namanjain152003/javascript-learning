// object literals (here singleton is not made)
// objects are store in key value pair


const mySym = Symbol("key1") // symbol use in object
const jsUser= {
    name:"naman",
    "full-name":"naman jain",
    age:18,
    [mySym]: "mykey1", // how to give value to symbol
    location:"delhi",
    email:"sfhishfwhfis@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["full-name"]);
console.log(jsUser[mySym]); // how to take print of symbol

jsUser.email ="namanjain@google.com" // this is how we can change value in object
Object.freeze(jsUser) // freeze helps so that value of object cant change
jsUser.email= "naman@google"
console.log(jsUser);


jsUser.greeting= function(){
    console.log("hello JS user");
}

jsUser.greetingTwo= function(){
    console.log(`hello JS user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


