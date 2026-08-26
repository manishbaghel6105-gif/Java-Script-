// Create a user object containing name, email, and role. Use Object.keys() to get all the property names.
// Example
// Input:
// const user = {
//  name: "Rahul",
//  email: "rahul@example.com",
//  role: "developer"
// };
// Output:
// ["name", "email", "role"]

const user = {
 name: "Rahul",
 email: "rahul@example.com",
 role: "developer"
};
let key = Object.keys(user);
console.log(key)