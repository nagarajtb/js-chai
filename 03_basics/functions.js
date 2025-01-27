function sayMyName() {
    console.log("Nagaraj");
    console.log('Tammanna');
    console.log('Badiger');
}

//sayMyName();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNumbers(3225, null)

function addTwoNumbers(num1, num2) {
    //let result = num1 + num2 
    return num1 + num2
    
}
const noresult = addTwoNumbers(10, 50)
//console.log("Result:", noresult)

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter a user name");
//         return
//     } else {
// return `${username} just logged in!`
//     } 
// }

function loginUserMessage(username = "Sam") {
    if (!username) {
        console.log("Please enter a user name");
        return
    } else {
        return `${username} just logged in!`
    } 
}

//console.log(loginUserMessage("Tammanna"));

function calculateCartPrice(...num1) {
    return num1
}

//console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Premnath",
    price: 199
}

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user);

handleObject({
    username: "Nagaraj",
    price: 399
})

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
