const myNums = [1,2,3];

const myTotal = myNums.reduce(function(acc, curval){
    console.log(`acc: ${acc} and currval:${curval}`); 
    return acc + curval 
}, 10);

console.log(myTotal);