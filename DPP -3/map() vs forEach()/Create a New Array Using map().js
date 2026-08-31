// Using the same array of frontend technologies, use map() to create a new array where every technology
// is converted to uppercase.
// Example:
// Input:
// ["html", "css", "javascript"]
// Output:
// ["HTML", "CSS", "JAVASCRIPT"]


const products = ["html", "css", "javascript"]
;

const upperCaseProducts = products.map(product => product.toUpperCase());

console.log(upperCaseProducts);