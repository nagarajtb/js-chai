const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Batman", "Flash"];

const allHeroes = [...marvel_heroes, ...dc_heroes];

console.log(allHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realArray = anotherArray.flat(Infinity);

console.log(realArray);

console.log(Array.isArray("Nagaraj"));
console.log(Array.from("nagaraj"));
console.log(Array.from({name: "Nagaraj"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));