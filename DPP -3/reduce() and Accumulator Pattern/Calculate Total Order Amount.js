// Create an array of order objects containing amount. Use reduce() to calculate the total order amount.
// Example:
// Input:
// [
//  { amount: 500 },
//  { amount: 1000 },
//  { amount: 750 }
// ]
// Output:
// 2250

const orders = [
  { amount: 500 },
  { amount: 1000 },
  { amount: 750 }
];

const totalAmount = orders.reduce((total, order) => {
  return total + order.amount;
}, 0);

console.log(totalAmount);