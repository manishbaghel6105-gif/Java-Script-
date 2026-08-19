// 22. Menu-Based Calculator
// Create this menu:
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// 5. Modulus
// Take the user’s choice and two numbers.
// Use switch-case to perform the selected operation.


// ----------------> Answer -------> 
let choice = 3;
let a = 20;
let b = 5;

switch (choice) {
    case 1:
        console.log("Addition =", a + b);
        break;

    case 2:
        console.log("Subtraction =", a - b);
        break;

    case 3:
        console.log("Multiplication =", a * b);
        break;

    case 4:
        console.log("Division =", a / b);
        break;

    case 5:
        console.log("Modulus =", a % b);
        break;

    default:
        console.log("Invalid choice");
}