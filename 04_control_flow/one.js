// 1. if
// const isUserLoggedIn = false
// if (isUserLoggedIn) {
//     console.log("logged in");
// } else {
//     console.log("not logged in");
// }

// <, >, <=, >=, ==

// const temperature = 61

// if (temperature < 50) {
//     console.log ("less than 50");
// } else  {
//     console.log('temperature is greater than 50');
// }

// const score = 50

// if (score > 100) {
//     var power = "fly"; 
// }
// console.log(`User power : ${power}`);

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2==3) {
    console.log("allow to buy");
} if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("allow to buy");
    
}