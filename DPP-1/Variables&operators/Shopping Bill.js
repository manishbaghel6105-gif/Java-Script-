// Create variables for:
// ● Product price
// ● Quantity
// Calculate the total bill.
// Then apply a discount of 10% and display:
// ● Original bill
// ● Discount amount
// ● Final bill

// ---------> answer ------->

const productPrice = 100;
const quantity = 5;

const originalBill = productPrice * quantity;
const discountAmount = originalBill * 10/100;
const finalBill = originalBill - discountAmount;

console.log("Original Bill:", originalBill);
console.log("Discount Amount:", discountAmount);
console.log("Final Bill:", finalBill);