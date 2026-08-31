// Create an array of cart item objects containing name and quantity. Use reduce() to calculate the total
// quantity of all items.
// Example:
// Input:
// [
//  { name: "Laptop", quantity: 1 },
//  { name: "Mouse", quantity: 2 }
// ]
// Output:
// 3


const productnames = [
 { name: "Laptop", quantity: 1 },
 { name: "Mouse", quantity: 2 }
]


const totalproduct  = productnames.reduce((accumulator, productnames) => {
  return accumulator + 1;
}, 0);

console.log(totalproduct);