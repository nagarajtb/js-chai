// const myObj = {
//     js: 'JavaScript',
//     cpp: 'C++',
//     rb: 'Ruby',
//     'swift': "Swifty by Apple"
// }

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`)
// }

const cities = ['BLR', 'DWD', 'UBL', 'MYS', 'TMK'];

for (const [key, value] in cities) { 
    console.log(cities[key]); 
}