// Create an array of user objects with name and role. Use map() and the spread operator to create a new
// array where the role of every user is changed to "developer" without modifying the original array.
// Example:
// Input:
// [
//  { name: "Rahul", role: "student" },
//  { name: "Priya", role: "student" }
// ]
// Output:
// [
//  { name: "Rahul", role: "developer" },
//  { name: "Priya", role: "developer" }
// ]
const user = [
 { name: "Rahul", role: "student" },
 { name: "Priya", role: "student" }
]
;

const UpdateUser =  user.map( user =>  ({...user,role : "developer"}));

console.log(UpdateUser);