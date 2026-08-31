// Create an array of product names and use map() to create a new array where every product name is
// converted to uppercase.
// Example:
// Input:
// ["laptop", "mobile", "headphones"]
// Output:
// ["LAPTOP", "MOBILE", "HEADPHONES"]

const products = ["laptop", "mobile", "headphones"];

const upperCaseProducts = products.map(product => product.toUpperCase());

console.log(upperCaseProducts);