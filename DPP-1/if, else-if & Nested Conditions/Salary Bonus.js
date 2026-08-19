// 17. Salary Bonus
// Take an employee’s:
// ● Salary
// ● Years of experience
// Bonus rules:
// Experience >= 10 years → 20% bonus
// Experience >= 5 years → 10% bonus
// Experience >= 2 years → 5% bonus
// Below 2 years → No bonus
// Calculate and display:
// ● Original salary
// ● Bonus
// ● Final salary

// --------------->Answer------------>

var OriginalSalary = 25000;
var YearsOfExperience = 23;

if( YearsOfExperience >= 10){
    console.log("Original salary",OriginalSalary)
    OriginalSalary+=  OriginalSalary*20/100;
    Finalsalary = OriginalSalary;
    console.log("Finalsalary",OriginalSalary)
    console.log("Bonus is 20% increment")
}
else if( YearsOfExperience >= 5){
       console.log("Original salary",OriginalSalary)
    OriginalSalary+= OriginalSalary*10/100;
    Finalsalary = OriginalSalary;
    console.log("Finalsalary",OriginalSalary)
    console.log("Bonus is 10% increment")
}
else{
    console.log("No Bones Because Below 2 years");
}