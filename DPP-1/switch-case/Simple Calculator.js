// 20. Simple Calculator
// Take:
// ● First number
// ● Second number
// ● Operator
// Supported operators:
// +
// -
// *
// /
// %
// Use switch-case.
// Example:
// First number: 20
// Second number: 5
// Operator: *
// Output: 100
// Also handle division by zero

// --------------> answer ---------->
let num1 = 10;
let num2 = 0;
let Operator = "/";

switch (Operator) {
    case "+":
        console.log(num1+num2);
        break;
     case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    case "%":
        console.log(num1%num2);
        break;
    case "**":
        console.log(num1**num2);
        break;
 
     default:
        console.log("Invalid Day");
        break;
}
