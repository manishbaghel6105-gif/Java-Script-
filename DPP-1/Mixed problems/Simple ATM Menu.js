// 28. Simple ATM Menu
// Create the following menu:
// 1. Check Balance
// 2. Deposit Money
// 3. Withdraw Money
// 4. Exit
// Use switch-case.
// Rules:
// ● Check Balance → Display current balance
// ● Deposit → Add money to balance
// ● Withdraw → Check whether sufficient balance exists
// ● Exit → Display a goodbye message
// ● Invalid choice → Display an error message

// --------------> answer ------------->
let choice = 3;
var balance = 10000;
var withdraw =3000;
var deposite = 5000;


switch (choice) {
    case 1:
      
        console.log("Check Balance : " , balance );
        break;

    case 2:
        
        console.log("Deposit Money : " ,deposite,"total balance :", balance += deposite );
        break;

    case 3:
       
     console.log("Withdraw" ,withdraw,"total balance :", balance += deposite -= withdraw );
        break;

    default:
        console.log("Exit");
        console.log("goodbye");
}