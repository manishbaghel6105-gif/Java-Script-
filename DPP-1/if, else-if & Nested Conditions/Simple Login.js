// 16. Simple Login
// Create:
// username
// password
// Correct credentials:
// username = "admin"
// password = "12345"
// If both are correct:
// Login successful
// Otherwise:
// Invalid username or password
// Use the logical && operator.

// --------------->answer------------>
var username = "admin";
var password = "12345";
let userInput = "amin";
let passwordInput = "1345";

 
if(username===userInput && password===passwordInput){
    console.log("login successful");
}
else if(username!=userInput && password==passwordInput){
    console.log("Invalid  username");
}
else if(username==userInput && password!=passwordInput){
    console.log("Invalid  password");
}
else{
    console.log("Invalid username or password");
}