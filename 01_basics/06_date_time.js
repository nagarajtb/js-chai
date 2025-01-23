//console.log(Date());

let myDOB = new Date(1986, 7, 11);
console.log(myDOB.toDateString());
 
console.log(myDOB.toLocaleString('default', {
    weekday: "short",
    dateStyle: "full"
})

)