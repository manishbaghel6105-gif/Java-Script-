// 23. Traffic Signal
// Take a traffic signal color:
// "red"
// "yellow"
// "green"
// Use switch-case.
// Display:
// red → Stop
// yellow → Wait
// green → Go
// For any other value:
// Invalid signal

// ------>Answer---------->

let  trafficsignal= "Red";
switch (trafficsignal) {
    case "Red":
        console.log("Stop");
        break;
     case "yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("GO");
        break;

     default:
        console.log("Invalid signal");
        break;
}