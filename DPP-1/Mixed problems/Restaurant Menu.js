// Create the following menu:
// 1. Burger → ₹150
// 2. Pizza → ₹250
// 3. Pasta → ₹180
// 4. Sandwich → ₹120
// Take the customer’s choice and quantity.
// Use switch-case to calculate the total price.
// Example:
// Choice: 2
// Quantity: 3
// Total: ₹750

// -------------> Answer ----------> 

let choice = 2;
let Quantity=3;
Burger =150;
Pizza =250;
Pasta  =180;
Sandwich  =120;

switch (choice) {
    case 1:
        console.log("Burger" ,Burger * Quantity );
        break;

    case 2:
        console.log("Pizza Total bill is : " ,Pizza * Quantity );
        break;

    case 3:
     console.log("Pasta " ,Pasta  * Quantity );
        break;

    case 4:
        console.log("Sandwich" ,Sandwich * Quantity );
        break;


    default:
        console.log("Invalid choice");
}