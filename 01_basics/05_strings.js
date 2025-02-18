const name = "hitesh"
const repoCount = 50

// console.log(name + " " + repoCount + " value"); // old method


// new method
// string interpolation


console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh-hc')
console.log(gameName[0]);
console.log(gameName.__proto__);

//strings methods 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// in substring negative values are not allowed 
const newString = gameName.substring(0,4) // last value is not included
console.log(newString);

const anotherString = gameName.slice(-8 ,4) // here last value is not included 
console.log(anotherString);


const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
 //2:22
