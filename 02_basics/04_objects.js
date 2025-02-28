//const tinderUser = new Object()  // this is singleton object

const tinderUser ={}
tinderUser.id="123abc"
tinderUser.name="naman"
tinderUser.isLoggedIn = false
//console.log(tinderUser);
const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"naman",
            lastname:"jain"
        }
    }

} 
// this is how we can use nested objects
//console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={1:"a" , 2:"b"}
const obj2 ={3:"a", 4:"b"}
//const obj3 = {obj1 , obj2} // in this both objects will be in object
//const obj3 = Object.assign({}, obj1,obj2) // this will clearly combine both objects in single object
// here {} act as target and all objects act as source
const obj3={...obj1,...obj2}
console.log(obj3);


const users = [
    {
        id:1,
        email:"naman@google"
    }
]
console.log(users[0].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // it returns keys in array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //helps to wheather the required entry is present in object or not


//OBJECT DESTRUCTURING


const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"naman"
}
//course.courseInstructor

const{courseInstructor : instructor }= course // method to use object elements and we can use another name for obejct element as well 
console.log(instructor);

//this part is example of react
/*
const navbar=({comapny})=> {

}
navbar(company="naman")
*/

//now api comes in json format
//{
// "name":"hitesh",
// "coursename":"js in hindi",
// "price":"free "
// }

//sometimes api can get in form of array as well