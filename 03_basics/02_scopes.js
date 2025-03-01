/*let a = 10
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);*/

{} // scope..

if(true){
    let a = 10
const b = 20
var c = 30

}
//console.log(a);
//console.log(b);
//console.log(c);
// var does not follow the scope instructions
// inside if is called block scope
// outside if it is called global scope

function one(){
    const username = "hitesh"
    function two(){
        const website ="youtube"
        console.log(username);
    }
   // console.log(website);
    two()
}
one()

if (true){
    const username ="hitesh"
    if(username == "hitesh"){
        const website =" youtube"
        console.log(username + website);
    }
    //console.log(website);

}
//console.log(username);

//++++++++++++++++++++++++++++++++++++ interesting+++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num +1
}
addone(5)

const addTwo = function(num){
    return num +2
}
addTwo(5)