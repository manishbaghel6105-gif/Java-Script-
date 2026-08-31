// Create an array of users containing name and isActive. Use filter() to get only the active users.
// Example:
// Input:
// [
//  { name: "Rahul", isActive: true },
//  { name: "Priya", isActive: false }
// ]
// Output:
// [
//  { name: "Rahul", isActive: true }
// ]

const user = [
 { name: "Rahul", isActive: true },
 { name: "Priya", isActive: false }
]
const filteruser = user.filter(user => user.isActive === true )
console.log(filteruser);