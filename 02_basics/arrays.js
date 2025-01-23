const myArray = [0,1,2,3,4,5];
 
myArray.push(6);
 //myArray.pop();

//myArray.unshift(9);
//myArray.shift();

console.log(myArray.includes(9));
console.log(myArray.indexOf(9));

const newArray = myArray.join();
console.log(typeof newArray);