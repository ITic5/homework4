//Homework
let currentDay = "Sunday";
switch(currentDay) {
    case "Saturday":
    case "Sunday":
        console.log("It's WEEKEND!!!");
        break;
    case "Friday":
        console.log("WEEKEND is Coooming!");
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("WORK!");
        break;
    default:
        console.log("The day you entered doesn't exist!");
}

//Exercises under the lesson
//Exercise 1
let temperature = 15;
if(temperature < 15){
    console.log(temperature + "°C: It's Cold!");
}else if(temperature <= 25){
    console.log(temperature + "°C: You can wear t-shirt!");
}else{
    console.log(temperature + "°C: It's HOT!");
}

//Exercise 2
let timeOfDay = "noon";
if(timeOfDay == "morning"){
    console.log("Good morning.");
}else if(timeOfDay == "afternoon"){
    console.log("Good afternon.");
}else{
    console.log("Good evening.");
}

//Exercise 3
let yearsOfExperience = 6;
if(yearsOfExperience < 2){
    console.log("Junior");
}else if(yearsOfExperience <= 5){
    console.log("Medior");
}else{
    console.log("Senior");
}

//Exercise 4
let age = 6;
if(yearsOfExperience < 12){
    console.log("Child");
}else if(yearsOfExperience <= 18){
    console.log("Teen");
}else{
    console.log("Adult");
}

//Exercise 5
let day = "Sunday";
switch(day){
    case "Saturday":
    case "Sunday":
        console.log("It's weekend...");
        break;
    default:
        console.log("It's weekday...");
}

//Exercise 6
let score = 99;
if(score < 50){
    console.log("Failed.");
}else if(score <= 75){
    console.log("Pass.");
}else{
    console.log("Excellent!");
}

//Exercises from lesson
//Exercise 1
let name = "Admin";
if(name == "Admin"){
    console.log("Welcome!")
}else{
    console.log("Access denied!")
}

//Exercise 2
let password = "secretPassword";
if(password == "secretPassword"){
    console.log("Correct!")
}else{
    console.log("Wrong password!")
}

//Exercise 3
if(name == "Admin" && password == "secretPassword"){
    console.log("User logged in!")
}else{
    console.log("Name or password are incorrect!")
}

//Exercise 4
let userType = "moderator";
if(userType == "admin" || userType == "moderator"){
    console.log("You are admin.")
}else{
    console.log("You are regular user.")
}

//Exercise 5
let allowedTypes = ["admin", "moderator"];
let typeChecker = allowedTypes.includes(userType);

if(typeChecker){
    console.log("You are administrator.")
}else{
    console.log("You are not administrator.")
}

//Exercise 6 commented so homework won't be overwritten
// let dayOfWeek = "Wednesday";
// let weekend = ["Saturday", "Sunday"];
// let friday = "Friday";
// let workingDays = ["Monday", "Tuesday", "Wednesday", "Thursday"];
//
// if(weekend.includes(dayOfWeek)){
//     console.log("It's Weekend!")
// }else if(friday == dayOfWeek){
//     console.log("Weekend is coming!")
// }else if(workingDays.includes(dayOfWeek)){
//     console.log("Work, work, work!")
// }else{
//     console.log("Wrong input!")
// }