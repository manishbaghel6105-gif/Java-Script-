// Create a settings object and use Object.entries() to convert its properties into key-value pairs.
// Example:
// Input:
// const settings = {
//  theme: "dark",
//  language: "English",
//  notifications: true
// };
// Expected Output:
// [
//  ["theme", "dark"],
//  ["language", "English"],
//  ["notifications", true]
// ]

const settings = {
 theme: "dark",
 language: "English",
 notifications: true
};

let object = Object.entries(settings)
console.log(object);