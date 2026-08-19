// Take the electricity units consumed.
// Calculate the bill using:
// 0–100 → ₹5/unit
// 101–200 → ₹7/unit
// Above 200 → ₹10/unit
// Then apply:
// Bill >= ₹2000 → 10% discount
// Otherwise → No discount
// Display:
// Units
// Original Bill
// Discount
// Final Bill

// ----------> Ansewer -------->
let units = 2100;
let bill = 0;
let OriginalBill = 0;
let discount = 0;
let FinalBill = 0;

if (units <= 100) {
    bill = units * 5;
} 
else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);

} 
else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}
    OriginalBill= bill;
     if (bill >= 2000) {
        discount = bill * 10 / 100;   
}
     else{
        console.log("no discount");
}
FinalBill = OriginalBill - discount;

console.log("Units : ", units);
console.log("Original Bill : " , OriginalBill);
console.log("Discount : " , discount);
console.log("Final Bill : " , FinalBill);

