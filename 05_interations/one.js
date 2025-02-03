// for (let i = 0; i <= 5; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 5; j++) {
//         console.log(`inner loop value: ${j}`);   
//         for (let k = 0; k <= 5; k++) {
//             console.log(`more inner loop value: ${k}`);    
//         } 
//     }
// }

// let myArray = ["flash", 'batman', 'superman'];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//break and continue
for (let index = 1; index <= 8; index++) {
    if (index == 5) {
        console.log(`5 detected`);
        continue;
        
    }
    console.log(`value of i is ${index}`);    
}


