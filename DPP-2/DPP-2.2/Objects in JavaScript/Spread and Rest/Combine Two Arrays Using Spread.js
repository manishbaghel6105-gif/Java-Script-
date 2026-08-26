// Create one array containing frontend technologies and another containing backend technologies. Use
// the spread operator to combine them into a single array.
// Example:
// Input:
// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express"];
// Output:
// ["HTML", "CSS", "JavaScript", "Node.js", "Express"]

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

const technologies = [...frontend, ...backend];

console.log(technologies);