// Create a user object containing name and role. Use the spread operator to create a new object and
// update the role to "developer".
// Example:
// Input:
// const user = {
//  name: "Rahul",
//  role: "student"
// };
// Output:
// {
//  name: "Rahul",
//  role: "developer"
// }

const user = {
 name: "Rahul",
 role: "student"
};
user.role = "developer";
const newUser = {
    ...user
};

console.log(newUser);