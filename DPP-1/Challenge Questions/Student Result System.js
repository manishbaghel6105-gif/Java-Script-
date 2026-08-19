// 30. Student Result System
// Create variables for:
// studentName
// rollNumber
// mathMarks
// scienceMarks
// englishMarks
// Calculate:
// ● Total marks
// ● Percentage
// ● Grade
// ● Pass/Fail
// Rules:
// Pass/Fail
// The student must score at least 40 in every subject.
// Grade
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// 40–59 → E
// Below 40 → F
// Display a result like:
// -------------------------
// STUDENT RESULT
// -------------------------
// Name : Rahul
// Roll No : 101
// Math : 85
// Science : 78
// English : 92
// Total : 255
// Percentage : 85%
// Grade : B
// Result : PASS
// -------------------------
// ------------> Answer ------->

var studentName = "Rahul";
var rollNumber = 101;
var mathMarks = 85;
var scienceMarks = 78; 
var englishMarks = 92;
console.log( "Name : ",studentName);
console.log("Roll no : ",rollNumber);
console.log("");
console.log("");

console.log( "Math Marks : ",mathMarks);
console.log("Science Marks : ",scienceMarks);
console.log("English Marks : ",englishMarks);
console.log("");
console.log("");

let TotalMarks = mathMarks + scienceMarks + englishMarks;
console.log( "Total : " , TotalMarks);
let  Percentage = (mathMarks + scienceMarks + englishMarks)/3;
console.log("Percentage: " ,Percentage,"%");
//  Grade
if(Percentage<=100){
    console.log("Grade : A");
}
else if(Percentage<=89){
    console.log("Grade : B");
}
else if(Percentage<=79){
    console.log("Grade : C");
}
else if(Percentage<=69){
    console.log("Grade : D");
}

else if(Percentage<=59){
    console.log("Grade : E");
}
else if(Percentage<=39){
    console.log("Grade : F");
}

// Result
if(Percentage>=40)
    console.log("Result : PASS");
else{
    console.log("Result : Fail");
}