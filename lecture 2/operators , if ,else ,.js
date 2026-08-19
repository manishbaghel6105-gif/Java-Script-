// arithmetic operators
let num1= 2;
let num2= 4;
let sum= num1 + num2;
console.log(sum);
let difference= num1 - num2;
console.log(difference);
let product= num1 * num2;
console.log(product);
let quotient= num1 / num2;
console.log(quotient);
let remainder= num1 % num2;
console.log(remainder);
let exponentiation= num1 ** num2;
console.log(exponentiation);

// increment and decrement operators
// -----> increment operator
num1++;
console.log(num1);
// -----> decrement operator
num2--;
console.log(num2);

// pre-increment and pre-decrement operators
// -----> pre-increment operator
++num1;
console.log(num1);
// -----> pre-decrement operator
--num2;
console.log(num2);

// -----> assignment operators
num1 += 5; // equivalent to num1 = num1 + 5
console.log(num1);
num2 -= 3; // equivalent to num2 = num2 - 3
console.log(num2);
num1 *= 2; // equivalent to num1 = num1 * 2
console.log(num1);
num2 /= 4; // equivalent to num2 = num2 / 4
console.log(num2);
num1 %= 3; // equivalent to num1 = num1 % 3
console.log(num1);
num1 **= 3; // equivalent to num1 = num1 ** 3
console.log(num1);


// -----> comparison operators
let a= 5;
let b= 10;
let c= 5;
console.log(a === b); // false
console.log(a === c); // true
console.log(a == b); // false
console.log(a == c); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= c); // true
console.log(a <= c); // true
 

// loose cannot  check the data type of the variable
console.log(a == b); // false
console.log(a == c); // true
//   strict can check the data type of the variable
console.log(a === b); // false
console.log(a === c); // true


// logical operators
// and operator (&&)
let x = true;
let y = false;
console.log(x && y); // false
console.log(x && x); // true

// or operator (||)
console.log(x || y); // true
console.log(y || y); // false

// not operator (!)
console.log(!x); // false
console.log(!y); // true


const age =16;
const hasid = true;
// // and operator (&&)
const canenterclub= age >= 18 && hasid== true;
console.log(canenterclub); // false

// // or operator (||)
const canenterclub2= age >= 18 || hasid== true;
console.log(canenterclub2); // true

// // not operator (!)
const canenterclub3= !(age >= 18);
console.log(canenterclub3); // true

// operators precedence
// boardmaas


// conditional statements
// example of if statement
const age =17;
if (age >= 18) {
    console.log("You are allowed to enter the club");
}
 else {
    console.log("You are not allowed to enter the club");
}

// else if statement
let day = "Monday";
if (day === "Monday") {
    console.log("Today is Monday");
}
    else if (day === "Tuesday") {
    console.log("Today is Tuesday");
}
    else if (day === "Wednesday") {
    console.log("Today is Wednesday");
}
    else if (day === "Thursday") {
    console.log("Today is Thursday");
}
    else if (day === "Friday") {
    console.log("Today is Friday");
}
    else if (day === "Saturday") {
    console.log("Today is Saturday");
}
    else if (day === "Sunday") {
    console.log("Today is Sunday");
}
   else {
    console.log("Invalid day");
}

// nested if statement
const issubscription = false;
const isloggedin = true;
if (issubscription) {
    if (isloggedin) {
        console.log("You can watch the video");
    }
    else {
        console.log("You need to log in to watch the video");
    }
}
else {
    console.log("You need to subscribe to watch the video");
}

// switch statement
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("This is an apple");
        break;
    case "banana":
        console.log("This is a banana");
        break;
    case "orange":
        console.log("This is an orange");
        break;
    default:
        console.log("This is not a fruit");
        break;
}


// input statement
let userInput = prompt("Enter a fruit:");
switch (userInput.toLowerCase()) {
    case "apple":
        console.log("This is an apple");
        break;
    case "banana":
        console.log("This is a banana");
        break;
    case "orange":
        console.log("This is an orange");
        break;
    default:
        console.log("This is not a fruit");
        break;
}
