const day = prompt("Please enter the day:")

switch (day) {
    case "1":
        console.log("Monday : Inclass");
        break;
    case "2":
        console.log("Tuesday : Inclass");
        break;
    case "3":
        console.log("Wednesday : Inclass");
        break;
    case "4":
        console.log("Thursday : Inclass");
        break;
    case "5":
        console.log("Friday : Teamwork");
        break;
    case "6":
        console.log("Saturday : Inclass + Workshop");
        break;
    case "7":
        console.log("Sunday : Selfstudy");
        break;

    default:
        console.log("Please enter valid day");
        break;
}