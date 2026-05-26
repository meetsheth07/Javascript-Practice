//forof loop example


let arr = [10, 20, 30, 40, 50];

for (let value of arr) {
    console.log(value);
}

let vari = "Hello, World!";

for (let char of vari) {
    console.log(char);
}

let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('d', 4);

for(let [key,value] of map) {
    console.log(`${key}: ${value}`);
}


//forin loop example

const myObj = {
    name: "John",
    age: 30,
    city: "New York"
};  

for (let key in myObj) {
    console.log(`${key}: ${myObj[key]}`);
}

const languages = ["JavaScript", "Python", "Java", "C++"];

for (let index in languages) {
    console.log(`${index}: ${languages[index]}`);
}

//foreach loop example

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});

const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function(fruit, index) {
    console.log(`${index}: ${fruit}`);
});

let objArr = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35},
    {name: "David", age: 40}
];

objArr.forEach((obj)=>{
    console.log(`Name: ${obj.name}, Age: ${obj.age}`);
})