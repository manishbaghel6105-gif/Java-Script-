// Create a user object with name and role. Update the role from "student" to "developer" and display the
// updated object.
// Example:
// Input:
// {
//  name: "Rahul",
//  role: "student"
// }
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

console.log(user);