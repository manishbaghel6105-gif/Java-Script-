// Create an array of product names and use reduce() with an accumulator to count the total number of
// products.
// Example:
// Input:
// ["Laptop", "Mouse", "Keyboard"]
// Output:
// 3

const productnames = ["Laptop", "Mouse", "Keyboard"]

const totalproduct  = productnames.reduce((accumulator, productnames) => {
  return accumulator + 1;
}, 0);

console.log(totalproduct);