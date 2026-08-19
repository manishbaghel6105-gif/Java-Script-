// Create variables for marks of three subjects.
// Calculate:
// ● Total marks
// ● Average marks
// ● Percentage
// Assume every subject is out of 100

// ---------> answer ------>
const EnglishMarks = 85;
const MathMarks = 90;
const ScienceMarks = 95;


const totalMarks = EnglishMarks + MathMarks + ScienceMarks;
console.log("Total Marks:", totalMarks);

const averageMarks = totalMarks / 3;
console.log("Average Marks:", averageMarks);

const percentage = (totalMarks / 300) * 100;
console.log("Percentage:", percentage + "%");