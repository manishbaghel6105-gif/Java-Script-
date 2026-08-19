// 19. Day of the Week
// Take a number from 1 to 7.
// Using switch-case:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// For any other number:
// Invalid day

// ----------->answer---------->

let Day = "Monday";
switch (Day) {
    case "Monday":
        console.log("Today is Monday");
        break;
     case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("This is an  Wednesday");
        break;
    case "Thursday":
        console.log("This is an  Thursday");
        break;
    case "Friday":
        console.log("This is an  Friday");
        break;
    case "Saturday":
        console.log("This is an  Saturday");
        break;
     case " Sunday":
        console.log("This is an   Sunday");
        break;
     default:
        console.log("Invalid Day");
        break;
}