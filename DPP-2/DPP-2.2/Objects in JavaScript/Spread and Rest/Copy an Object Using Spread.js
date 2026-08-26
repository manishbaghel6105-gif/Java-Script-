// Create a user object and use the spread operator to create a copy of it.
// Example:
// Input:
// const user = {
//  name: "Rahul",
//  role: "developer"
// };
// Expected Result:
// const newUser = {
//  name: "Rahul",
//  role: "developer"
// };


const user = {
    name: "Rahul",
    role: "developer"
};

const newUser = {
    ...user
};

console.log(newUser);