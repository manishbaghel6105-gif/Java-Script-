// Create an array of product objects containing name and price. Use filter() to get products with a price
// greater than 1000.
// Example:
// Input:
// [
//  { name: "Mouse", price: 500 },
//  { name: "Keyboard", price: 1500 }
// ]
// Output:
// [
//  { name: "Keyboard", price: 1500 }
// ]

const user = [
 { name: "Mouse", price: 500 },
 { name: "Keyboard", price: 1500 }
]
const filteruser = user.filter(user => user.price >= 1000 )
console.log(filteruser);