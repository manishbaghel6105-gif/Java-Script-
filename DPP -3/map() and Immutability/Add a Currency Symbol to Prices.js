// Create an array of product prices and use map() to create a new array where each price is displayed with
// a ₹ symbol.
// Example:
// Input:
// [100, 250, 500]
// Output:
// ["₹100", "₹250", "₹500"]

const currency = [100,250,500];

const symbolCurrency = currency.map(currency => " ₹" + currency);

console.log(symbolCurrency);