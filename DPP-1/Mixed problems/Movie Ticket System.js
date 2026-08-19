// Take:
// age
// numberOfTickets
// Ticket prices:
// Age below 12 → ₹100
// Age 12–59 → ₹200
// Age 60+ → ₹120
// Calculate the total ticket price.
// Example:
// Age: 25
// Tickets: 3
// Total: ₹600
// -------------> Answer ------------>
var age = 25;
var numberOfTickets = 3;

if(age<=12){
    numberOfTickets*=100
    console.log("Your Amount is", numberOfTickets);
}
else if(age <=59){
    numberOfTickets*=200
   console.log("Your Amount is", numberOfTickets);
}
else if(age<=60){
   numberOfTickets*=120
   console.log("Your Amount is", numberOfTickets);
}
else{ 
    console.log("wrong input");
}
