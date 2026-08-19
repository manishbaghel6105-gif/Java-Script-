// 18. Age Category
// Take a person’s age.
// Display:
// 0–12 → Child
// 13–19 → Teenager
// 20–59 → Adult
// 60+ → Senior Citizen
// Also handle invalid negative ages

// ---------> Answer ----------> 

const age = 16;

if(age>=0 && age>=12)
    console.log("child");

else if(age>=13 && age>=19)
    console.log("Teenager");


else if(age>=20 && age>=59)
    console.log("Adult");

else if(age>=60)
    console.log("Senior Citizen");

else
  console.log("Your Are  Not Human Also Your Age Is Invalid");