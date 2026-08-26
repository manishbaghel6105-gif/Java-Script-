// Create a product object containing name, price, and category. Use Object.values() to get all the values
// from the object
// Example:
// Input:
// const product = {
//  name: "Laptop",
//  price: 50000,
//  category: "Electronics"
// };
// Output:
// ["Laptop", 50000, "Electronics"]

const product = {
 name: "Laptop",
 price: 50000,
 category: "Electronics"
};

let values = Object.values(product);
console.log(values)