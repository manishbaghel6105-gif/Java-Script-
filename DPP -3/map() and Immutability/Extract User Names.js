// Create an array of user objects containing name and email. Use map() to create a new array containing
// only the names.
// Example:
// Input:
// [
//  { name: "Rahul", email: "rahul@example.com" },
//  { name: "Priya", email: "priya@example.com" }
// ]
// Output:
// ["Rahul", "Priya"]

const user = [
 { name: "Rahul", email: "rahul@example.com" },
 { name: "Priya", email: "priya@example.com" }

]
const names = user.map(user => user.name);

console.log(names);