// Create an array of names and use map() to add the text "User: " before every name. Display the new
// array.
// Example:
// Input:
// ["Rahul", "Priya", "Aman"]
// Output:
// ["User: Rahul", "User: Priya", "User: Aman"]

const names = ["Rahul", "Priya", "Aman"];

const users = names.map(name => "User: " + name);

console.log(users);