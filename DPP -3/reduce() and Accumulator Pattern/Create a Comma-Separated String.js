// Create an array of frontend technologies and use reduce() to combine them into a single
// comma-separated string.
// Example:
// Input:
// ["HTML", "CSS", "JavaScript"]
// Output:
// "HTML, CSS, JavaScript"

const frontend = ["HTML", "CSS", "JavaScript"];

const result = frontend.reduce((accumulator, technology) => {
  return accumulator + technology + ", ";
}, "");

console.log(result.slice(0, -2));