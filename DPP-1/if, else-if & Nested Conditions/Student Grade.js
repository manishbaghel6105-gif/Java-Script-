// Take a student’s percentage.
// Assign a grade:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// 40–59 → E
// Below 40 → F
// Also check for invalid percentages below 0 or above 100.

// ----------->Answer ------------>

let studentPercentage =  30;

if (studentPercentage < 0 || studentPercentage > 100) {
    console.log("Invalid percentage. Please enter a value between 0 and 100.");
} else if (studentPercentage >= 90) {
    console.log("Grade: A");
} else if (studentPercentage >= 80) {
    console.log("Grade: B");
} else if (studentPercentage >= 70) {
    console.log("Grade: C");
} else if (studentPercentage >= 60) {
    console.log("Grade: D");
} else if (studentPercentage >= 40) {
    console.log("Grade: E");
} else {
    console.log("Grade: F");
}