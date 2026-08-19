// 15. Electricity Bill
// Take the number of units consumed.
// Calculate the bill using:
// 0–100 units → ₹5 per unit
// 101–200 units → ₹7 per unit
// Above 200 → ₹10 per unit
// Example:
// Units = 250
// First 100 → 100 × 5
// Next 100 → 100 × 7
// Remaining → 50 × 10
// Display the final bill.


// ---------->Answer--------------->
let units = 250;
let bill = 0;

if (units <= 100) {
    bill = units * 5;
} 
else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
} 
else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Electricity Bill = ₹" + bill);