// Create an array of product prices. Use map() to create a new array where every price is increased by
// 10%. Keep the original array unchanged.
// Example:
// Input:
// [100, 200, 300]
// Output:
// Original: [100, 200, 300]
// New: [110, 220, 330]

const price = [100,200,300];

const Updateprice = price.map(price =>  price/10+price);

console.log(Updateprice);