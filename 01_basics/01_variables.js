const accountId = 144553
let accountEmail="namanjain@gmail.com"
var accountpassword="12345"
accountcity="jaipur"
// we can declare variables without var or let bu this is not a good approach ....
//accountId=2 // not allowed to change
/*prefer not to use var , because of the issue in block scope and functional scope*/
accountEmail="hch.com"
accountpassword="222222"
accountcity="delhi"
console.log(accountId)
let accountState;
console.table([accountId,accountEmail,accountpassword,accountcity,accountState])
