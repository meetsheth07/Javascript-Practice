const score = 606
const balance = new Number(1000.45530)

let num1 = balance.toPrecision(5) //returns a string representing the number to a specified precision
console.log(num1); //1000.5

let num2 = balance.toFixed(2) //returns a string representing the number with a fixed number of decimals
console.log(num2); //1000.46

console.log((10000000000).toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);



//--------------------------------MATHS------------------------------

console.log(Math)
console.log(Math.abs(-5)); 
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.round(4.5));

console.log(Math.max(10, 20, 5));
console.log(Math.min(10, 20, 5));

console.log(Math.random()); //returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.ceil(Math.random() * 100)); //returns a random number between 0 and 100

let min = 25
let max = 50
let randomNum = Math.floor(Math.random() * (max - min + 1)+ min) //returns a random number between min and max (inclusive
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum);