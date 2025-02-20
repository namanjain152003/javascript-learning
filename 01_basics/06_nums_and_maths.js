const score = 400

const balance = new Number(100)
console.log(balance);
console.log(score);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // how many values after the decimal.

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//   *********************************** MATHS *******************************************//

// it is a library that comes with javascript by default.

console.log(Math);
console.log(Math.abs(-4)); // here only negative value changes to positive value

console.log(Math.round(4.6));
console.log(Math.ceil(6.2));
console.log(Math.floor(4.9));

console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random()); // its values lie between 0 and 1
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1 ))+ min ) // this helps to give the random values between min and max




