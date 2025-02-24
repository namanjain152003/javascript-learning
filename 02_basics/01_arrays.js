// ARRAY
const myarr =[0,1,2,3,4,5] 
const myArr = [0,1,2,3, true ," hitesh"] // we can use different types of element in array also
const myHeros =["shaktimaan", " bheem", "ironman"]
// javascript arrays are resizable

const myArr2= new Array(1,2,3,4)
console.log(myArr[5]);
console.log(myArr2);


// ARRAY METHODS :

myArr.push(6)    // push add the new element to the array
myArr.push(7)
myArr.pop()   // it removes the last element of the array 
 
myArr.unshift(9) // it add the element at starting of the array
myArr.shift()    // it removes the first element of the array


//console.log(myArr.includes(3));
//console.log(myArr.indexOf(3));

const newArr = myArr.join() // it changes the array can covert into string 
console.log(myArr);
console.log(newArr);


//slice , splice
console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1);
 // in slice last value in not included
 // slice does not effect/manipulate the original array

 console.log("B" , myArr);
 const myn2 =myArr.splice(1,3)
 console.log(myn2);
// in splice last value is included
// splice effect/manipulate the original array 

console.log("C", myArr);

 
 