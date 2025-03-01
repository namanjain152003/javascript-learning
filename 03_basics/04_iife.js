// Immediately Invoked Function Expressions(IIFE)

/*function chai(){
    console.log(`DB CONNECTED`);
    
}
chai() //above code is without iife
*/
// this is called named iife
(function chai(){
    console.log(`DB CONNECTED`);
    
})();
// this is with iife
// ; should be used to end the function execution 

// simple iife
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ("naman")