// Create an array of product prices and use reduce() to calculate the total price of all items in the cart.
// Example:
// Input:
// [500, 1200, 300]
// Output:
// 2000

const productprices = [500, 1200, 300]


const totalprice  = productprices.reduce( productprices =>  productprices  + productprices )

console.log(totalprice);