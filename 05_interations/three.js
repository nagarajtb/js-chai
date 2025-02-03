// array specific loops

//for of

// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello World!"

// for (const greet of greeting) {
//     if (greet.includes(" ")) {
//         break;
//     }
//     console.log(greet);
    
// }

// const map = new Map();
// map.set('IN', 'India')
// map.set('US', 'USA');
// map.set('FR', 'France');

// //console.log(map);

// for (const [key, value] of map) {
//     console.log(key);
    
// }

const myObj = {
    'game1': 'NFS most wanted',
    'game2': 'Medal of honor',
    'game3': 'Counterstrike'
}

for (const [key,value] of myObj) {
    console.log(key)
}
//myObj is not iterable