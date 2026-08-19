// 21. Month Name
// Take a number from 1 to 12.
// Use switch-case to display the corresponding month.
// Example:
// 1 → January
// 2 → February
// 3 → March
// ...
// 12 → December
// For an invalid number:
// Invalid month


// ---------> answer--------->



let Month = 12;
switch ( Month) {
    case 1:
        console.log("This is an January");
        break;
     case 2:
        console.log("This is an February");
        break;
    case 3:
        console.log("This is an March");
        break;
    case 4:
        console.log("This is an April");
        break;
    case 5:
        console.log("This is an May");
        break;
    case 6:
        console.log("This is an June");
        break;
     case 7:
        console.log("This is an July");
        break;
    case 8:
        console.log("This is an Augest");
        break;
    case 9:
        console.log("This is an September");
        break;
    case 10:
        console.log("This is an October");
        break;
    case 11:
        console.log("This is an November");
        break;
    case 12:
        console.log("This is an December");
        break;
  
     default:
        console.log("Invalid Month");
        break;
}