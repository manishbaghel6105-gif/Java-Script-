// 24. ATM Transaction
// Create variables:
// balance
// withdrawAmount
// Check:
// 1. Withdrawal amount must be greater than 0.
// 2. Withdrawal amount must not be greater than the balance.
// 3. If valid, subtract the withdrawal amount.
// 4. Display the remaining balance.
// Example:
// Balance: ₹10000
// Withdraw: ₹3000
// Withdrawal successful
// Remaining balance: ₹7000



// ----------->Answer------------->

var balance = 10000;
var withdraw =3000;
if(withdraw <= 0){
    console.log("Withdrawal amount must be greater than 0");}
else if(balance < withdraw){
    console.log("Withdrawal amount must not be greater than the balance.");}
else if(balance > withdraw){
    console.log("balance :  ",  balance);
    console.log("withdraw : ", withdraw);
     withdrawAmount = balance -  withdraw ;
    console.log("Withdrawal successful");
    console.log("Remaining balance: ", withdrawAmount);
}
else{ 
    console.log("wrong input");
}
