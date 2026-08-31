// Create an array of product objects containing name and inStock. Use filter() to create a new array
// containing only the products that are in stock.
// Example:
// Input:
// [
//  { name: "Laptop", inStock: true },
//  { name: "Mouse", inStock: false }
// ]
// Output:
// [
//  { name: "Laptop", inStock: true }
// ]

const product = 
[
 { name: "Laptop", inStock: true },
 { name: "Mouse", inStock: false }
]
const filterproduct = product.filter(product => product.inStock);
console.log(filterproduct);