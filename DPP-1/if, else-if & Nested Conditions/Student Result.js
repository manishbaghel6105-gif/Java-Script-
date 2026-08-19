// 14. Student Result
// Take marks of three subjects.
// A student passes only when they score 40 or more in every subject.
// If the student passes, calculate the average and display:
// Average >= 75 → Distinction
// Average >= 60 → First Division
// Average >= 50 → Second Division
// Otherwise → Pass
// If any subject is below 40:
// Result: Fail

// ----------->Answer ------------>

let maths = 20;
let science = 30;
let english = 10;

if (maths >= 40 && science >= 40 && english >= 40) {
    let average = (maths + science + english) / 3;
    if (average >= 75) {
        console.log("Result: Pass with Distinction");
    } else if (average >= 60) {
        console.log("Result: Pass with First Division");
    } else if (average >= 50) {
        console.log("Result: Pass with Second Division");
    } else {
        console.log("Result: Pass");
    }
} else {
    console.log("Result: Fail");
}