let name = "Meet"
let repocnt = 11

console.log(`My name is ${name} and I have ${repocnt} repositories on GitHub.`); //Using template literals for string interpolation

let greeting = "Hello, World!"
console.log(greeting.length);

console.log(greeting.toUpperCase()); //HELLO, WORLD!
console.log(greeting.toLowerCase()); //hello, world!

let sentence = "JavaScript is a versatile language."
console.log(sentence.includes("versatile")); //true
console.log(sentence.startsWith("JavaScript")); //true
console.log(sentence.endsWith("language.")); //true     

let fruits = "apple, banana, cherry"
let fruitArray = fruits.split(", ") 
console.log(fruitArray); 

let joinedFruits = fruitArray.join(" | ")
console.log(joinedFruits); 

const newname = sentence.replace("JavaScript", "Python")
const addname  = sentence.concat(" It is widely used for web development.")

let trimmedString = "   Hello, World!   "
console.log(trimmedString.trim()); 

const multi = trimmedString.repeat(3)
const cutstring = trimmedString.slice(3, 8) 
const substring = trimmedString.substring(3, 8) 

let str1 = "Hello"
let str2 = "World"
let combined = str1 + " " + str2 
console.log(combined);

let num1 = 10
let num2 = 20
let newsum = toString(num1) + toString(num2)
console.log(newsum); //1020 because both numbers are converted to strings and concatenated

console.log(newsum.charAt(0)); 
console.log(newsum.indexOf("2"));

console.log(newsum.lastIndexOf("2"));
