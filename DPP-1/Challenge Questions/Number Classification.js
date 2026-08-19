// 29. Number Classification
// Take a number.
// Determine all applicable information:
// ● Whether it is positive, negative or zero
// ● Whether it is even or odd
// ● Whether it is greater than 100, less than 100, or equal to 100
// Example:
// Input: 150
// Output:
// Positive
// Even
// Greater than 100

// ----------> Answer ------------->
let num = 150;

// Whether it is positive, negative or zero
if(num>0){
    console.log("Positive");
}
else if(num<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

// Whether it is even or odd
if(num%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}
// Whether it is greater than 100, less than 100, or equal to 100
if(num>100)
{
    console.log("Greater than 100");
}
else if(num<100){
    console.log("less than 100");
}
else{
    console.log("equal to 100");
}