//constructor / singleton
Object.create;

const mySymbol = Symbol('key1');

//object literals
const jsUser = {
    name: "Nagaraj",
    "full name": "Nagaraj T Badiger",
    [mySymbol]: 'userId',
    age: 38,
    location: "Bengaluru",
    email: "nagarajbadiger@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); 
// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);
 
jsUser.email = "ntb@gmail.com";
//console.log(jsUser["email"]); 

jsUser.greeting = function() {
    console.log("Hello User");
}

jsUser.greetingTwo = function() {
    console.log(`Hello User from ${this.location}!`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

