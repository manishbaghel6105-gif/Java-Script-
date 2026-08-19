// Create two variables:
// a = 10
// b = 20
// Swap their values using a third variable.
// Expected output:
// Before swapping:
// a = 10
// b = 20
// After swapping:
// a = 20
// b = 10


// ---------->answer---------->

let a = 10;
let b = 20;
let c;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

c = a;
a = b;
b = c;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);