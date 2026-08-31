// Create an array of user objects containing name and role. Use filter() to get all users whose role is
// "developer".
// Example:
// Input:
// [
//  { name: "Rahul", role: "developer" },
//  { name: "Priya", role: "student" }
// ]
// Output:[
//  { name: "Rahul", role: "developer" }
// ]

const user = [
 { name: "Rahul", role: "developer" },
 { name: "Priya", role: "student" }
]
const filteruser = user.filter(user => user.role === "developer" )
console.log(filteruser);
