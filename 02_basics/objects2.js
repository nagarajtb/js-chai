const tinderUser = new Object()

tinderUser.id = "2468bdf"
tinderUser.name = "Prem"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "ntbad@gmail.com",
    fullName: {
        firstName: "Nagaraj",
        lastName: "Badiger"
    }
}

console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const dbusers = [
    {
        id: 1,
        email: "ntb@btn.com"
    },
    {
        id: 2,
        email: "ntb@btn.com"
    }
]

console.log(Object.entries(dbusers))