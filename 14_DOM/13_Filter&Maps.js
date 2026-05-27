const myNums = [1,2,3,4,5,6,7,8,9,10];

//filter method example

const evenNums = myNums.filter(function(num) {
    return num*3 % 2 === 0;
});

console.log(evenNums);


let booksObjects = [
    {title: "Book 1", author: "Author A", year: 2000},
    {title: "Book 2", author: "Author B", year: 2010},
    {title: "Book 3", author: "Author C", year: 2020},
    {title: "Book 4", author: "Author D", year: 1995},
    {title: "Book 5", author: "Author E", year: 2005},
    {title: "Book 6", author: "Author F", year: 2015}
];

const RecentBook = booksObjects.filter((book) => book.year > 2000);

console.log(RecentBook);

//map method example

const squaredNums = myNums.map(function(num) {
    return num * num;
});


console.log(squaredNums);

const bookTitles = booksObjects.map(function(book) {
    return book.title;
});

console.log(bookTitles);


const newNums = myNums
.map(function(num) {
    return num * 10;
})
.map(function(num) {
    return num + 1;
})
.filter(function(num) {
    return num>=50;
});

console.log(newNums);


//reduce method example

const sum = newNums.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);


let courseObjects = [
    {course:"JavaScript", price: 200},
    {course:"Python", price: 150},
    {course:"Java", price: 180},
    {course:"C++", price: 220},
    {course:"Ruby", price: 170},
    {course:"Go", price: 190}

];

let billedAmount = courseObjects.reduce(function(accumulator, course) {
    return accumulator + course.price;
}, 0);

console.log(billedAmount);