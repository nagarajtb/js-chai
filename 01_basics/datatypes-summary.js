// stack and heap memories

// all the primitive type of data use stack memory
// all the non-primitive type of data use heap memory

let myName = 'Nagaraj T Badiger';
let anotherName = myName
anotherName = "Premnath";

console.log(anotherName);
//Premnath
console.log(myName);
//Nagaraj T Badiger

let userOne = {
    email: "nagarajtbadiger@gmail.com",
    upi: "ntbadiger1108@ybl"
}

let userTwo = userOne;
userTwo.email = "ntbadiger1108@gmail.com",

console.log(userOne.email);
// ntbadiger1108@gmail.com

console.log(userTwo.email);
// ntbadiger1108@gmail.com

//in stack memory value doesn't get updated but in heap memory it does
