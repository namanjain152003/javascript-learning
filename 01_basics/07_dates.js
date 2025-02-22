 let myDate = new Date()
 console.log(myDate.toString());
 console.log(myDate.toLocaleString());// this helps to get local time
 console.log(myDate.toDateString()); // this only give date and day
 
 console.log(typeof myDate); // date is object
 

// in codespace we get wrong time , so get the right time we specify the timezone
console.log(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata" })); // Change timeZone as needed


let myCreatedDate = new Date(2023 ,11 , 23) // here in javascript month starts from 0
console.log(myCreatedDate.toDateString())
 
let myCreatedDate = new Date(2023 ,11 , 23, 1 , 3)

let myCreatedDate = new Date("2023-01-14") // in YYYY-MM-DD format month starts from 1
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // we divide 1000 to get seconds value and to avoid the decimal value we use floor value 


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()); // month starts from 0
console.log(newDate.getDay());

