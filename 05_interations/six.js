// const coding = ['js', 'ruby', 'java', 'python'];

// const values = coding.forEach((item)=> {
//     console.log(item);
// })
// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10];

//const newNums = myNums.filter((num)=> {return num > 5});

// const newNums = []
// myNums.forEach((num)=> {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);
const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: '2010',
        edition: 2012
    },
    {
        title: 'Book Two',
        genre: 'Non Fiction',
        publish: '2012',
        edition: 2014
    },
    {
        title: 'Book Three',
        genre: 'History',
        publish: '2014',
        edition: 2016
    },
    {
        title: 'Book Four',
        genre: 'Science',
        publish: '2016',
        edition: 2018
    },
]

let userBooks = books.filter((bk)=> bk.publish === '2014');

userBooks = books.filter((bk)=> {return bk.publish >= 2014 && bk.genre == 'Science'});

console.log(userBooks);
